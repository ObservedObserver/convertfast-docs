import { HeroSection } from "./hero-section";
import { FeatureSection } from "./feature-section";
import { CTA } from "./cta";
import { FAQ, faqs } from "./faq";
import { PricingSection } from "./pricing";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogoCloud } from "./logo-cloud";
import { SocialProof } from "./social-proof";
import { ThemeSwitcher, ThemeWrapper } from "./theme";
import Head from "next/head";
import { SEOContent } from "./seo-content";

function LandingPageExample() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <FeatureSection />
      <SocialProof />
      <CTA />
      <FAQ />
      <PricingSection />
    </div>
  );
}

function HomePage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ConvertFast UI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    description:
      "ConvertFast UI is an open-source landing page generator and CLI for building programmatic SEO experiences and marketing sites with production-ready React and Tailwind components.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "CLI-driven landing page scaffolding",
      "Conversion-optimized hero, feature, and pricing sections",
      "Customizable shadcn-inspired design tokens",
      "Framework-agnostic React and Tailwind output",
    ],
    url: "https://docs.convertfa.st",
    sameAs: [
      "https://github.com/steven-tey/convertfast-ui",
      "https://ui.convertfa.st",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <ThemeWrapper>
      <>
        <Head>
          <meta
            name="keywords"
            content="landing page generator, convertfast ui, programmatic seo, marketing site templates, landing page cli"
          />
          <meta name="author" content="ConvertFast UI" />
          <meta property="og:title" content="ConvertFast UI – Landing Page UI Kit and CLI" />
          <meta
            property="og:description"
            content="Generate high-converting landing pages with the ConvertFast UI CLI, reusable components, and SEO-friendly templates for SaaS, startups, and product launches."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://docs.convertfa.st/" />
          <meta name="twitter:card" content="summary_large_image" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productJsonLd),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd),
            }}
          />
        </Head>
        <div className="container mx-auto max-w-8xl py-16">
          <div className="max-w-3xl my-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
              Bootstrap your entire landing page pipeline with ConvertFast UI
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              ConvertFast UI delivers a CLI-powered workflow, reusable sections, and conversion-focused layouts so you can ship
              new landing pages in minutes. Generate production-ready hero, feature, pricing, and testimonial blocks directly in
              your codebase.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Document campaigns alongside your product, iterate faster with marketing and engineering in sync, and scale
              programmatic SEO efforts with consistent, high-quality UI components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/docs">Start now</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <code className="p-1 rounded">npx convertfast-ui@latest init</code>
              </Button>
            </div>
          </div>
          <Tabs defaultValue="example">
            <div className="flex justify-between">
              <div className="overflow-x-auto">
                <TabsList>
                  <TabsTrigger value="hero">Hero Section</TabsTrigger>
                  <TabsTrigger value="feature">Feature Section</TabsTrigger>
                  <TabsTrigger value="cta">CTA Section</TabsTrigger>
                  <TabsTrigger value="faq">FAQ Section</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing Section</TabsTrigger>
                  <TabsTrigger value="logo">Logo Cloud</TabsTrigger>
                  <TabsTrigger value="social">Social Proof</TabsTrigger>
                  <TabsTrigger value="example">Page Example</TabsTrigger>
                </TabsList>
              </div>
              <div className="grow-0 shrink-0 pl-2">
                <ThemeSwitcher />
              </div>
            </div>

            <TabsContent value="example">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <LandingPageExample />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hero">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <HeroSection />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="feature">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <FeatureSection />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cta">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <CTA />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <FAQ />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pricing">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <PricingSection />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="logo">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <LogoCloud />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="social">
              <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
                <CardContent className="p-0">
                  <SocialProof />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <SEOContent />
      </>
    </ThemeWrapper>
  );
}

export default HomePage;
