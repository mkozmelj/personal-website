/** Canonical site URL (set NEXT_PUBLIC_SITE_URL in production, e.g. https://yoursite.com) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://martinkozmelj.com";

export const SITE_NAME = "Martin Kozmelj";

export const DEFAULT_DESCRIPTION =
  "Senior frontend developer — portfolio, experience, and projects. React, Next.js, TypeScript, and modern web development.";

export const OG_IMAGE_PATH = "/api/og";

export const TWITTER_HANDLE = "@martinkozmelj";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martin Kozmelj",
  jobTitle: "Senior frontend developer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/mkozmelj",
    "https://www.linkedin.com/in/martinkozmelj/",
    "https://instagram.com/martinkozmelj",
  ],
} as const;
