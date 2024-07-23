import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>ConvertFast UI</span>,
  logoLink: 'https://ui.convertfa.st',
  // chat: {
  //   link: 'https://convertfa.st',
  // },
  footer: {
    text: 'Convert Fast',
  },
  // darkMode: true,
  docsRepositoryBase: 'https://github.com/ObservedObserver/convertfast-ui',
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://ui.convertfa.st' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'convert fast'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'convert fast docs'}
        />
        <link rel="canonical" href={url} />
      </>
    )
  }
}

export default config
