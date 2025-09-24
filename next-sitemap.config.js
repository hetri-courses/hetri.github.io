/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hetri.org',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/drafts/*', '/private/*'],
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: 'weekly',
      priority: url === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
  exclude: ['/drafts/*', '/private/*', '/apple-icon.png', '/icon0.svg', '/icon1.png', '/manifest.json']
}
