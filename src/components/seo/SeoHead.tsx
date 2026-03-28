import Head from "next/head";
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/site-config";

export type SeoHeadProps = {
  /** Page title without site name (e.g. "Experiences") */
  title?: string;
  description?: string;
  /** Path including leading slash, e.g. "/experiences" */
  path?: string;
  noIndex?: boolean;
};

export function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: SeoHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
