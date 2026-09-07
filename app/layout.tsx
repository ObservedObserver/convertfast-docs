import type { ReactNode } from 'react'
import { SITE_URL } from '@/site.config'
export const metadata = { metadataBase: new URL(SITE_URL) }
import { Analytics } from '@vercel/analytics/next'
import '@/styles/cascade.css'
import 'nextra-theme-docs/style.css'
import '@/global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}<Analytics /></body>
    </html>
  )
}
