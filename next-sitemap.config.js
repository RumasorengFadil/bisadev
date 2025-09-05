/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bbyts.com", // Domain utama website
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://api.bbyts.com/sitemap.xml", // Sitemap dinamis dari Laravel
    ],
  },
  // Halaman statis yang dimasukkan manual
  additionalPaths: async (config) => {
    const result = [];

    result.push({
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/explore",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });
    
    result.push({
      loc: "/register",
      changefreq: "weekly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/login",
      changefreq: "weekly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    });
    
    return result;
  },
};