const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'docs.convertfa.st' }],
        destination: 'https://ui.convertfa.st/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ui.convertfa.st' }],
        destination: 'https://ui.convertfa.st/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextra(nextConfig)
