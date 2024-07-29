import { HeroSection } from "./hero-section";
import { FeatureSection } from "./feature-section";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { PricingSection } from "./pricing";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";

function LandingPageExample() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CTA />
      <FAQ />
      <PricingSection />
    </>
  );
}

function HomePage() {
  return (
    <div>
      <div className="container mx-auto max-w-8xl py-16">
        <div className="max-w-3xl my-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
            Bootstrap your landing page with ConvertFast UI
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Landing page sections that you can copy paste into your project. Provide a CLI for developers to generate landing pages with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/docs">Start now</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <code className="p-1 rounded">npm install convertfast-ui</code>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="example">
          <TabsList>
            <TabsTrigger value="example">Page Example</TabsTrigger>
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="feature">Feature Section</TabsTrigger>
            <TabsTrigger value="cta">CTA Section</TabsTrigger>
            <TabsTrigger value="faq">FAQ Section</TabsTrigger>
            <TabsTrigger value="pricing">Pricing Section</TabsTrigger>
          </TabsList>
          <TabsContent value="example">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <LandingPageExample />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hero">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <HeroSection />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="feature">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <FeatureSection />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cta">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <CTA />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <FAQ />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pricing">
            <Card className="mt-2 shadow-lg max-h-[680px] overflow-auto">
              <CardContent>
                <PricingSection />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default HomePage;
