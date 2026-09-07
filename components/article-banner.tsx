import Image from 'next/image'
import AuthorAvatar from './author-avatar'
import { allAuthors } from '@/lib/author'

export default function ArticleBanner({ author, date, ogImage, description }: { author?: string; date?: string; ogImage?: string; description?: string }) {
  const authors = typeof author === 'string' ? author.split(/,\s*/g) : []
  const validAuthors = allAuthors.filter((item) => authors.includes(item.nickname))
  return (
    <div className="w-full border-b border-border pb-8">
      {validAuthors.length > 0 && <div className="flex items-center gap-4 mt-8 mb-6">{validAuthors.map((item) => <AuthorAvatar key={item.name} author={item} />)}</div>}
      {date && <p className="my-6 text-sm text-muted-foreground">Published on <time dateTime={String(date)}>{new Date(String(date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>}
      {ogImage && <Image src={String(ogImage)} width={1200} height={628} alt={String(description || '')} />}
    </div>
  )
}
