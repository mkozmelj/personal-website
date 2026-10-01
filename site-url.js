// Single source of truth for the site URL. Plain CommonJS so that both the
// app (src/site-config.ts) and next-sitemap.config.js can load it.
const DEFAULT_SITE_URL = "https://kozmelj.si";

module.exports = {
  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL,
};
