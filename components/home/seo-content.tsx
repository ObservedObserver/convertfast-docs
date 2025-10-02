import { FC } from "react";

export const SEOContent: FC = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 border-t border-b border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Why teams choose ConvertFast UI for landing page production
        </h2>
        <p className="text-lg leading-8 text-muted-foreground mb-6">
          ConvertFast UI was built for product marketers, founders, and developers who need to launch compelling landing pages
          without waiting on design or engineering sprints. Instead of wrestling with generic page builders, the ConvertFast UI
          CLI generates modern React and Tailwind components that align with your codebase, version control strategy, and design
          system. Every template is optimized for readability, accessibility, and conversion-focused storytelling.
        </p>
        <p className="text-lg leading-8 text-muted-foreground mb-6">
          The workflow is simple: install the CLI, run a command to scaffold a landing page, then tailor the copy, imagery, and
          calls to action to your customer persona. Because the output is transparent code, you can connect analytics, CMS
          content, localization, and A/B testing tools while preserving performance best practices.
        </p>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Built for modern growth teams
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                Standardize hero, feature, pricing, and testimonial sections across every campaign without duplicating effort.
              </li>
              <li>
                Maintain brand consistency with shared tokens for typography, spacing, and theme-aware color palettes.
              </li>
              <li>
                Collaborate effectively by storing landing pages in Git, reviewing changes, and deploying through your existing
                CI/CD pipeline.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">Popular use cases</h3>
            <p className="text-muted-foreground mb-3">
              Teams rely on ConvertFast UI to accelerate:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>Programmatic SEO landing pages for SaaS features, integrations, and industries.</li>
              <li>Product launch microsites and waitlists with conversion-focused messaging.</li>
              <li>Lifecycle campaign destinations for webinars, newsletters, and onboarding flows.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight mb-4">How the ConvertFast UI CLI works</h3>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
            <li>Install the CLI with <code>npx convertfast-ui@latest init</code> to bootstrap the toolkit.</li>
            <li>
              Choose from curated templates or assemble your own layout from hero, feature, pricing, FAQ, and social proof
              sections.
            </li>
            <li>
              Customize the generated code, connect it to your data sources, and deploy through your preferred hosting provider.
            </li>
          </ol>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight mb-4">SEO-friendly by default</h3>
          <p className="text-muted-foreground">
            Every template ships with semantic HTML, accessible components, and structured copy blocks. This foundation makes it
            easy to incorporate keywords, FAQs, and schema markup that improve search engine visibility for your product or
            service.
          </p>
        </div>
      </div>
    </section>
  );
};
