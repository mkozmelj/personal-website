const { SITE_URL } = require("./site-url");

// Update a page's date here when its content meaningfully changes.
// Pages not listed get no <lastmod> rather than a misleading one.
const LASTMOD = {
  "/": "2026-03-28",
  "/experiences": "2026-03-28",
  "/projects": "2026-03-28",
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.8,
  exclude: ["/api/*"],
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path === "/" ? 1 : config.priority,
    lastmod: LASTMOD[path],
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
};
