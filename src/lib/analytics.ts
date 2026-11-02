import posthog from "posthog-js";
import { useEffect, useRef } from "react";
import type { IPostMeta } from "@/common/types";

/**
 * Reports `article_read` once per view, when the last block of the post text
 * scrolls into view. Attach the returned ref to the element holding the text.
 * Skimmers also reach the end: compare `seconds_to_end` with `reading_minutes`.
 */
export function useArticleRead({ slug, readingMinutes }: IPostMeta) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lastBlock = contentRef.current?.lastElementChild;
    if (!lastBlock || !posthog.__loaded) return;

    const startedAt = Date.now();
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      posthog.capture("article_read", {
        slug,
        reading_minutes: readingMinutes,
        seconds_to_end: Math.round((Date.now() - startedAt) / 1000),
      });
    });
    observer.observe(lastBlock);
    return () => observer.disconnect();
  }, [slug, readingMinutes]);

  return contentRef;
}
