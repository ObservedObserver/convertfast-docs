import type { Metadata } from 'next';
import { SITE_URL } from '@/site.config';

export const SITE_NAME = 'ConvertFast UI';
export const SITE_DESCRIPTION = 'Generate editable Next.js landing pages with the ConvertFast CLI. Two templates, seven sections, shadcn components, and source code you own.';
export function buildPageMetadata({ title, description = SITE_DESCRIPTION, path = '/', noindex = false }: { title: string; description?: string; path?: string; noindex?: boolean }): Metadata {
  const url = new URL(path, SITE_URL).href;
  const cleanTitle = title.replace(/\s*\|\s*ConvertFast UI\s*$/i, '');
  const pageTitle = cleanTitle.includes('ConvertFast') ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`;
  return {
    title: { absolute: pageTitle }, description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    openGraph: { type: 'website', title: pageTitle, description, url, siteName: SITE_NAME, images: [{ url: new URL('/opengraph-image', SITE_URL).href, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: pageTitle, description, images: [new URL('/opengraph-image', SITE_URL).href] },
  };
}
export function serializeJsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, '\\u003c'); }
