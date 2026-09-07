import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/site.config';
export default function robots(): MetadataRoute.Robots {
  // Allow demo crawling so crawlers can read the noindex directive on the response.
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE_URL}/sitemap.xml` };
}
