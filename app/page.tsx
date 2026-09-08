import MarketingHome from '@/components/marketing/home';
import { buildPageMetadata, serializeJsonLd, SITE_DESCRIPTION } from '@/lib/seo';
import { SITE_URL } from '@/site.config';

export const metadata = buildPageMetadata({ title: 'ConvertFast UI — Next.js landing page templates and CLI', path: '/' });
export default function HomePage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', name: 'ConvertFast UI', url: SITE_URL },
    { '@type': 'SoftwareApplication', name: 'ConvertFast UI', url: SITE_URL, description: SITE_DESCRIPTION, applicationCategory: 'DeveloperApplication', operatingSystem: 'Cross-platform', softwareVersion: '0.2.1', license: 'https://opensource.org/license/mit', codeRepository: 'https://github.com/ObservedObserver/convertfast-ui', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} /><MarketingHome /></>;
}
