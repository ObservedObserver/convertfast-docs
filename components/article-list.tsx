import Link from 'next/link'
import { getPageMap } from 'nextra/page-map'
import { getAuthor } from '@/lib/author'

type Article = {
  route: string
  name: string
  frontMatter?: { title?: string; description?: string; date?: string; author?: string }
  children?: Article[]
}

export async function ArticleList({ postsRoute = '/blog/posts', limit = 20 }: { postsRoute?: string; limit?: number }) {
  const entries = await getPageMap(postsRoute) as Article[]
  const articles = entries
    .filter((entry) => entry.frontMatter && entry.name !== 'index')
    .sort((a, b) => new Date(b.frontMatter.date || 0).getTime() - new Date(a.frontMatter.date || 0).getTime())
    .slice(0, limit)

  return (
    <div className="divide-y divide-border">
      {articles.map(({ route, frontMatter }) => {
        const author = getAuthor(frontMatter.author)
        return (
          <article key={route} className="py-7">
            <Link href={route} className="group block no-underline">
              <h2 className="text-xl font-semibold group-hover:underline">{frontMatter.title}</h2>
              <p className="mt-2 text-muted-foreground">{frontMatter.description}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {author?.name}
                {frontMatter.date && <> · <time dateTime={frontMatter.date}>{new Date(frontMatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></>}
              </p>
            </Link>
          </article>
        )
      })}
    </div>
  )
}
