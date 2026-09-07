import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '@/mdx-components'
import { buildPageMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ mdxPath: string[] }> }

export const generateStaticParams = generateStaticParamsFor('mdxPath')
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps) {
  const { mdxPath } = await params
  const { metadata } = await importPage(mdxPath)
  return buildPageMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/${mdxPath.join('/')}`,
  })
}

const Wrapper = getMDXComponents().wrapper

export default async function DocumentationPage(props: PageProps) {
  const params = await props.params
  const { default: Content, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <Content {...props} params={params} />
    </Wrapper>
  )
}
