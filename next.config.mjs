import nextra from 'nextra';
import siteConfig from './site.config.js';
const { SITE_URL } = siteConfig;
const withNextra = nextra({ search: { codeblocks: false } });
const legacyHosts = ['ui.convertfa.st', 'docs.convertfa.st', 'www.ui.convertfa.st', 'www.convertfa.st'];
export default withNextra({
  async redirects() {
    return [
      { source: '/sitemap-0.xml', destination: `${SITE_URL}/sitemap.xml`, permanent: true },
      ...legacyHosts.filter(host => host !== new URL(SITE_URL).hostname).map(host => ({ source: '/:path*', has: [{ type: 'host', value: host }], destination: `${SITE_URL}/:path*`, permanent: true })),
    ];
  },
  async headers() {
    return [
      { source: '/demo/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/r/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] },
      { source: '/:path*', headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }] },
    ];
  },
});
