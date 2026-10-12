import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import type { IPostMeta } from "@/common/types";
import { readPost, readPosts, splitCode, type Post } from "../../blog-posts";

// Server-only: import from getStaticProps/getStaticPaths, never from components

const WORDS_PER_MINUTE = 200;
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

/** Words a reader reads: no code blocks, JSX/HTML tags, comments or URLs */
function countWords(content: string): number {
  const prose = splitCode(content)
    .filter((part) => !part.fenced)
    .map((part) => part.text)
    .join(" ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    // Tags with their attributes, allowing ">" inside quoted values
    .replace(/<\/?[A-Za-z][^>"]*(?:"[^"]*"[^>"]*)*>/g, " ")
    .replace(/\]\([^)]*\)/g, "]");
  return prose.split(/\s+/).filter((word) => /\w/.test(word)).length;
}

function toMeta({ content, ...post }: Post): IPostMeta {
  return {
    ...post,
    readingMinutes: Math.max(
      1,
      Math.round(countWords(content) / WORDS_PER_MINUTE),
    ),
  };
}

/** Published posts, newest first (drafts too in development) */
export function getAllPosts(): IPostMeta[] {
  return readPosts({ includeDrafts: SHOW_DRAFTS }).map(toMeta);
}

const PRETTY_CODE_OPTIONS: Options = {
  theme: "github-dark-default",
  // Code blocks use the prose pre background instead of the theme's
  keepBackground: false,
};

/** Post metadata plus its MDX compiled for <MDXRemote> */
export async function getPost(slug: string) {
  const post = readPost(slug);
  const source = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, PRETTY_CODE_OPTIONS]],
    },
  });
  return { meta: toMeta(post), source };
}
