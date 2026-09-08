import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

export default async function DocumentationLayout({ children }: { children: ReactNode }) {
  // Marketing and preview routes are outside the documentation navigation.
  const pageMap = (await getPageMap()).filter((page) => !('route' in page) || (
    page.route !== '/' && page.route !== '/shadcn-color-picker' && !page.route.startsWith('/demo')
  ))
  return (
    <Layout
      pageMap={pageMap}
      navbar={<Navbar logo={<span className="font-semibold tracking-tight">ConvertFast UI</span>} projectLink="https://github.com/ObservedObserver/convertfast-ui" />}
      footer={<Footer>ConvertFast UI · Open source under the MIT license.</Footer>}
      docsRepositoryBase="https://github.com/ObservedObserver/convertfast-docs/tree/main"
      editLink="Edit this page on GitHub"
      feedback={{ content: 'Report an issue', labels: 'documentation' }}
      nextThemes={{ defaultTheme: 'light' }}
    >
      {children}
    </Layout>
  )
}
