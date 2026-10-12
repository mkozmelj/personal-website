// Reads and validates blog posts. Plain CommonJS so that the app
// (src/lib/posts.ts), next-sitemap.config.js and scripts/crosspost-devto.mjs
// share one set of frontmatter and draft rules.
const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");

const POSTS_DIR = path.join(process.cwd(), "content/blog");

// Fenced blocks (``` or ~~~, closed by a fence of the same kind at least as
// long) or inline code spans (closed by a backtick run of the same length)
const CODE_PATTERN =
  /^ {0,3}((`|~)\2{2,})[^\n]*$[\s\S]*?^ {0,3}\1\2*[ \t]*$|(`+)(?!`)(?:(?!\n[ \t]*\n)[\s\S])*?(?<!`)\3(?!`)/gm;

/**
 * @typedef {object} Post
 * @property {string} slug File name in content/blog without .mdx
 * @property {string} title
 * @property {string} description
 * @property {string} date Publish date, YYYY-MM-DD
 * @property {string[]} tags
 * @property {boolean} draft
 * @property {string} content MDX body without frontmatter
 */

function requireString(value, key, file) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: frontmatter "${key}" is required`);
  }
  return value.trim();
}

function toIsoDate(value, file) {
  // YAML turns an unquoted 2026-10-12 into a Date at UTC midnight
  const iso =
    value instanceof Date && !Number.isNaN(value.getTime())
      ? value.toISOString().slice(0, 10)
      : String(value);
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  // Round-trip through UTC to reject impossible dates such as 2026-02-30
  const date = match && new Date(Date.UTC(+match[1], +match[2] - 1, +match[3]));
  if (!date || date.toISOString().slice(0, 10) !== iso) {
    throw new Error(`${file}: frontmatter "date" must be YYYY-MM-DD`);
  }
  return iso;
}

function readFile(slug) {
  const { data, content } = matter(
    fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8"),
  );
  return { slug, data, content };
}

/** @returns {Post} */
function validate({ slug, data, content }) {
  const file = `content/blog/${slug}.mdx`;
  return {
    slug,
    title: requireString(data.title, "title", file),
    description: requireString(data.description, "description", file),
    date: toIsoDate(data.date, file),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    content,
  };
}

/**
 * Posts newest first. Drafts are dropped before validation, so an unfinished
 * one can't fail a build that leaves it out.
 * @param {{ includeDrafts?: boolean }} [options]
 * @returns {Post[]}
 */
function readPosts({ includeDrafts = false } = {}) {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => readFile(name.replace(/\.mdx$/, "")))
    .filter((post) => includeDrafts || post.data.draft !== true)
    .map(validate)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * @param {string} slug
 * @returns {Post}
 */
function readPost(slug) {
  return validate(readFile(slug));
}

/**
 * Splits MDX into prose and code (fenced blocks and inline spans), in order
 * @param {string} source
 * @returns {{ code: boolean, fenced: boolean, text: string }[]}
 */
function splitCode(source) {
  const parts = [];
  let last = 0;
  for (const match of source.matchAll(CODE_PATTERN)) {
    parts.push({
      code: false,
      fenced: false,
      text: source.slice(last, match.index),
    });
    parts.push({ code: true, fenced: match[1] !== undefined, text: match[0] });
    last = match.index + match[0].length;
  }
  parts.push({ code: false, fenced: false, text: source.slice(last) });
  return parts;
}

/**
 * Root-relative URL ("/path"), not protocol-relative ("//host")
 * @param {string} url
 */
function isRootRelative(url) {
  return url.startsWith("/") && !url.startsWith("//");
}

module.exports = { readPosts, readPost, splitCode, isRootRelative };
