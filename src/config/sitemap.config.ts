export const SITEMAP_CONFIG = {
  sitemap: "https://bisadev.id/sitemap.xml",
  staticRoutes: [
    {
      url: "/",
      lastModified: new Date("2026-07-24"),
      priority: 1.0,
    },
    {
      url: "/services",
      lastModified: new Date("2026-07-21"),
      priority: 0.9,
    },
    {
      url: "/portofolio",
      lastModified: new Date("2026-07-21"),
      priority: 0.9,
    },
    {
      url: "/about",
      lastModified: new Date("2026-07-21"),
      priority: 0.8,
    },
    {
      url: "/contact",
      lastModified: new Date("2026-07-21"),
      priority: 0.8,
    },
    {
      url: "/blog",
      lastModified: new Date("2026-07-21"),
      priority: 0.7,
    },
  ],
  blogPostsPrior: 0.6,
};