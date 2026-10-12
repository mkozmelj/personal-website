const { readPosts } = require("./blog-posts");
const { SITE_URL } = require("./site-url");

const posts = readPosts();
// Home and /blog list the newest posts, so a new post updates them too
const latestPost = posts[0]?.date ?? "";
const later = (a, b) => (a > b ? a : b);

// Update a page's date here when its content meaningfully changes; post dates
// come from frontmatter. Pages not listed get no <lastmod> rather than a
// misleading one.
const LASTMOD = {
  "/": later("2026-10-01", latestPost),
  "/about": "2026-10-01",
  "/experiences": "2026-10-01",
  "/projects": "2026-10-01",
  "/blog": latestPost || undefined,
  ...Object.fromEntries(posts.map((post) => [`/blog/${post.slug}`, post.date])),
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
