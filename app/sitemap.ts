import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/site.config';
import { getContentRoutes } from '@/lib/content-routes';
export default function sitemap(): MetadataRoute.Sitemap {
  return getContentRoutes().map(route => ({ url: new URL(route, SITE_URL).href }));
}
