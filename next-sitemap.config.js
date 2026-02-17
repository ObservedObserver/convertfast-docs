const { SITE_URL } = require("./site.config");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
    },
};
