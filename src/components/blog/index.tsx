import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { IPostMeta } from "@/common/types";
import { NewTabHint } from "@/components/common/links";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  // Dates are UTC midnight; a local zone could shift them a day
  timeZone: "UTC",
});

/** Date, reading time and draft marker */
export function PostMeta({ post }: Readonly<{ post: IPostMeta }>) {
  return (
    <p className="text-meta tabular-nums text-text-subtle">
      <time dateTime={post.date}>
        {DATE_FORMAT.format(new Date(post.date))}
      </time>
      {" · "}
      {post.readingMinutes} min read
      {post.draft && <span className="text-accent"> · Draft</span>}
    </p>
  );
}

interface IPostListProps {
  posts: IPostMeta[];
  /** h3 when the list sits under a section h2, as on home */
  headingLevel?: "h2" | "h3";
}

/** Post list for /blog and the home section */
export function PostList({
  posts,
  headingLevel: Heading = "h2",
}: Readonly<IPostListProps>) {
  if (posts.length === 0) {
    return <p className="text-body text-text-muted">No posts yet.</p>;
  }

  return (
    <ul className="mt-2">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-border first:border-t">
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1.5 py-5"
          >
            <PostMeta post={post} />
            <Heading className="text-h3 text-text transition-colors duration-fast group-hover:text-accent">
              {post.title}
            </Heading>
            <p className="max-w-prose text-body-sm text-text-muted">
              {post.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Internal links stay client-side; external ones open in a new tab */
function MdxLink({ href = "", children, ...props }: ComponentProps<"a">) {
  // "//host/path" is protocol-relative, so external
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (/^(https?:)?\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener" {...props}>
        {children}
        <NewTabHint />
      </a>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

interface IFigureProps {
  src: string;
  alt: string;
  /** Intrinsic size; strings because MDX blocks {expressions} */
  width: number | string;
  height: number | string;
  caption?: string;
  /** Breaks out of the text column on desktop, for detailed diagrams */
  wide?: boolean;
}

/** Image with a caption and a link to the full-size file */
function Figure({ src, alt, width, height, caption, wide }: IFigureProps) {
  return (
    <figure className={wide ? "lg:-mx-40" : undefined}>
      <div className="not-prose relative">
        <Image
          src={src}
          alt={alt}
          width={Number(width)}
          height={Number(height)}
          sizes={wide ? "(min-width: 1024px) 1000px, 100vw" : "680px"}
          className="h-auto w-full rounded-md border border-border"
        />
        {/* Click target over the image. It duplicates the caption link, so it
            is hidden from assistive tech, which reads the image's alt instead */}
        <a
          href={src}
          target="_blank"
          rel="noopener"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 cursor-zoom-in"
        />
      </div>
      <figcaption>
        {caption && <>{caption} </>}
        <a href={src} target="_blank" rel="noopener">
          Open full size
          <NewTabHint />
        </a>
      </figcaption>
    </figure>
  );
}

/** Element overrides and components available in post bodies */
export const MDX_COMPONENTS = { a: MdxLink, Figure };
