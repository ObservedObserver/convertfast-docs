import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';
import { buildPageMetadata } from '@/lib/seo';
import { HeroSection as DefaultHero } from '@/components/generated/default/hero-section';
import { LogoCloud as DefaultLogos } from '@/components/generated/default/logo-cloud';
import { FeatureSection as DefaultFeatures } from '@/components/generated/default/feature-section';
import { SocialProof as DefaultProof } from '@/components/generated/default/social-proof';
import { CTA as DefaultCTA } from '@/components/generated/default/cta';
import { FAQ as DefaultFAQ } from '@/components/generated/default/faq';
import { PricingSection as DefaultPricing } from '@/components/generated/default/pricing';
import { HeroSection as EditorialHero } from '@/components/generated/editorial/hero-section';
import { LogoCloud as EditorialLogos } from '@/components/generated/editorial/logo-cloud';
import { FeatureSection as EditorialFeatures } from '@/components/generated/editorial/feature-section';
import { SocialProof as EditorialProof } from '@/components/generated/editorial/social-proof';
import { CTA as EditorialCTA } from '@/components/generated/editorial/cta';
import { FAQ as EditorialFAQ } from '@/components/generated/editorial/faq';
import { PricingSection as EditorialPricing } from '@/components/generated/editorial/pricing';

const templates: Record<string, Record<string, ComponentType>> = {
  default: { 'hero-section': DefaultHero, 'logo-cloud': DefaultLogos, 'feature-section': DefaultFeatures, 'social-proof': DefaultProof, cta: DefaultCTA, faq: DefaultFAQ, pricing: DefaultPricing },
  editorial: { 'hero-section': EditorialHero, 'logo-cloud': EditorialLogos, 'feature-section': EditorialFeatures, 'social-proof': EditorialProof, cta: EditorialCTA, faq: EditorialFAQ, pricing: EditorialPricing },
};
type Props = { params: Promise<{ template: string }>; searchParams: Promise<{ section?: string }> };
export async function generateMetadata({ params }: Props) {
  const { template } = await params;
  return buildPageMetadata({ title: `${template} template preview`, path: `/demo/${template}`, noindex: true });
}
export default async function DemoPage({ params, searchParams }: Props) {
  const { template } = await params;
  const { section } = await searchParams;
  const components = Object.hasOwn(templates, template) ? templates[template] : undefined;
  if (!components || (section && !Object.hasOwn(components, section))) notFound();
  const selected = section ? [[section, components[section]] as const] : Object.entries(components);
  return <div className="light" style={{ background: 'white', color: '#18181b', minHeight: '100vh', colorScheme: 'light' }}>
    <aside style={{ padding: '10px 16px', background: '#fff7ed', color: '#7c2d12', fontSize: 12, borderBottom: '1px solid #fed7aa' }}>SAMPLE TEMPLATE · Fictional product copy, logos, testimonials, and prices. Replace before publishing.</aside>
    <main>{selected.map(([name, Section]) => <Section key={name} />)}</main>
  </div>;
}
