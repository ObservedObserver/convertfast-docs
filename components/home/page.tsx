import { HeroSection } from "./hero-section";
import { FeatureSection } from "./feature-section";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { PricingSection } from "./pricing";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogoCloud } from "./logo-cloud";
import { SocialProof } from "./social-proof";
import { ThemeSwitcher, ThemeWrapper } from "./theme";

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
  return (
    <ThemeWrapper>
      <div className="container mx-auto max-w-8xl py-16">
        <div className="max-w-3xl my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
            Bootstrap your landing page with ConvertFast UI
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Landing page sections that you can copy paste into your project.
            Provide a CLI for developers to generate landing pages with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/docs">Start now</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <code className="p-1 rounded">
                npx convertfast-ui@latest init
              </code>
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
    </ThemeWrapper>
  );
}

export default HomePage;
