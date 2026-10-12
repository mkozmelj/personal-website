import Head from "next/head";
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  PERSON_ID,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TWITTER_HANDLE,
  WEBSITE_ID,
} from "@/site-config";

export type SeoHeadProps = {
  /** Page title without site name (e.g. "Experience") */
  title?: string;
  description?: string;
  /** Path including leading slash, e.g. "/experiences" */
  path?: string;
  noIndex?: boolean;
  /** Marks the page as a blog post: article metadata, BlogPosting JSON-LD
      and an OG image with the title */
  article?: {
    /** YYYY-MM-DD */
    publishedTime: string;
    tags: string[];
  };
};

export function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
  article,
}: SeoHeadProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — ${SITE_TAGLINE}`;
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl =
    article && title
      ? `${SITE_URL}${OG_IMAGE_PATH}?title=${encodeURIComponent(title)}`
      : `${SITE_URL}${OG_IMAGE_PATH}`;
  // Shares show the post title alone; the site name is in og:site_name
  const ogTitle = article && title ? title : fullTitle;
  const articleJsonLd = article && {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: article.publishedTime,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    image: ogImageUrl,
    keywords: article.tags,
    inLanguage: "en",
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: SITE_URL,
    },
    isPartOf: { "@id": WEBSITE_ID },
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      {article && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedTime}
          />
          <meta property="article:author" content={SITE_URL} />
          {article.tags.map((tag) => (
            <meta key={`tag-${tag}`} property="article:tag" content={tag} />
          ))}
          <script
            type="application/ld+json"
            // "<" escaped so frontmatter text can't close the script tag
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
            }}
          />
        </>
      )}

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
