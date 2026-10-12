// Cross-posts published blog posts to dev.to, with the canonical URL pointing
// back to this site. Posts already on dev.to (matched by canonical URL,
// drafts included) are skipped, so it is safe to run after every deploy.
//
//   node scripts/crosspost-devto.mjs [--dry-run] [--draft]
//
// --dry-run  print the converted Markdown instead of posting (no key needed)
// --draft    create the dev.to articles unpublished, to review them first

import blogPosts from "../blog-posts.js";
import siteUrl from "../site-url.js";

const { readPosts, splitCode, isRootRelative } = blogPosts;
const { SITE_URL } = siteUrl;
const API = "https://dev.to/api";
// dev.to allows 4 tags per article
const MAX_TAGS = 4;

const DRY_RUN = process.argv.includes("--dry-run");
const DRAFT = process.argv.includes("--draft");
const API_KEY = process.env.DEVTO_API_KEY;

function absoluteUrl(url) {
  return isRootRelative(url) ? `${SITE_URL}${url}` : url;
}

function parseAttributes(source) {
  const attributes = {};
  for (const [, key, value] of source.matchAll(/(\w+)(?:="([^"]*)")?/g)) {
    attributes[key] = value ?? true;
  }
  return attributes;
}

/** MDX prose (outside code blocks and spans) to Markdown dev.to can render */
function convertProse(text, file) {
  const converted = text
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/<Figure\b([\s\S]*?)\/>/g, (_, source) => {
      const { src, alt = "", caption } = parseAttributes(source);
      const image = `![${alt}](${absoluteUrl(src)})`;
      return caption ? `${image}\n*${caption}*` : image;
    })
    // Root-relative Markdown links/images and HTML href/src attributes
    .replace(/\]\((\/[^)\s]*)/g, (_, url) => `](${absoluteUrl(url)}`)
    .replace(/\b(href|src)="(\/[^"]*)"/g, (_, attr, url) => {
      return `${attr}="${absoluteUrl(url)}"`;
    });

  // Fail rather than post a component dev.to would show as raw text
  const component = converted.match(/<[A-Z]\w*/);
  if (component) {
    throw new Error(
      `${file}: no dev.to conversion for ${component[0]}>, add one to scripts/crosspost-devto.mjs`,
    );
  }
  return converted;
}

function toMarkdown(content, file) {
  // Code blocks and inline code stay as written
  return splitCode(content)
    .map((part) => (part.code ? part.text : convertProse(part.text, file)))
    .join("")
    .trim();
}

function toTags(tags) {
  const cleaned = tags
    .map((tag) =>
      String(tag)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""),
    )
    .filter(Boolean);
  return [...new Set(cleaned)].slice(0, MAX_TAGS);
}

async function devto(pathname, init = {}) {
  const response = await fetch(`${API}${pathname}`, {
    ...init,
    headers: {
      "api-key": API_KEY,
      "content-type": "application/json",
      accept: "application/vnd.forem.api-v1+json",
      ...init.headers,
    },
  });
  if (!response.ok) {
    throw new Error(
      `dev.to ${init.method ?? "GET"} ${pathname}: ${response.status} ${await response.text()}`,
    );
  }
  return response.json();
}

/** Canonical URLs of every article on the account, drafts included */
async function getCrosspostedUrls() {
  const urls = new Set();
  for (let page = 1; ; page++) {
    const articles = await devto(`/articles/me/all?per_page=1000&page=${page}`);
    if (articles.length === 0) return urls;
    for (const article of articles) {
      if (article.canonical_url) urls.add(article.canonical_url);
    }
  }
}

async function main() {
  if (!API_KEY && !DRY_RUN) {
    throw new Error("DEVTO_API_KEY is not set");
  }

  const posts = readPosts().map((post) => ({
    ...post,
    canonicalUrl: `${SITE_URL}/blog/${post.slug}`,
  }));
  const crossposted = API_KEY ? await getCrosspostedUrls() : new Set();
  const pending = posts.filter((post) => !crossposted.has(post.canonicalUrl));

  if (pending.length === 0) {
    console.log("Nothing to cross-post.");
    return;
  }

  for (const {
    slug,
    title,
    description,
    tags,
    content,
    canonicalUrl,
  } of pending) {
    const article = {
      title,
      description,
      body_markdown: toMarkdown(content, `content/blog/${slug}.mdx`),
      tags: toTags(tags),
      canonical_url: canonicalUrl,
      published: !DRAFT,
    };

    if (DRY_RUN) {
      console.log(`--- ${slug} ---`);
      console.log(JSON.stringify({ ...article, body_markdown: undefined }));
      console.log(article.body_markdown);
      continue;
    }

    const created = await devto("/articles", {
      method: "POST",
      body: JSON.stringify({ article }),
    });
    console.log(`Cross-posted ${slug}: ${created.url}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
