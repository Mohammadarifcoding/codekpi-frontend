/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codekpi.club', // 🔁 Replace with your live site
  generateRobotsTxt: true,         // ✅ Generate robots.txt file
  sitemapSize: 5000,               // Optional chunking
  changefreq: 'weekly',            // SEO hint
  priority: 0.7,                   // SEO priority (0-1)
};
