const { SITE_URL } = require("./site-url");

// Update a page's date here when its content meaningfully changes.
// Pages not listed get no <lastmod> rather than a misleading one.
const LASTMOD = {
  "/": "2026-10-01",
  "/about": "2026-10-01",
  "/experiences": "2026-10-01",
  "/projects": "2026-10-01",
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
