import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is ConvertFast UI?",
    answer:
      "ConvertFast UI is an open-source CLI and component library that generates landing page sections, copy, and layouts. It helps growth teams launch programmatic SEO pages and product marketing sites without hand-coding each screen from scratch.",
  },
  {
    question: "How does ConvertFast UI differ from visual landing page builders?",
    answer:
      "Traditional drag-and-drop tools focus on publishing pages inside their hosted platform. ConvertFast UI outputs clean React and Tailwind code that you can version control, customize, and deploy alongside the rest of your application.",
  },
  {
    question: "Can the CLI integrate with my existing tech stack?",
    answer:
      "Yes. The generated code works seamlessly with popular frameworks including Next.js, Remix, Astro, and Vite. Because the output is standard React and Tailwind, you can connect analytics, localization, or CMS tooling just like any other page in your repository.",
  },
  {
    question: "Does ConvertFast UI support collaboration between marketing and engineering?",
    answer:
      "ConvertFast UI keeps design tokens, content structure, and component logic in one place. Marketers can update copy in MDX, while engineers retain control of the codebase. This shared workflow reduces handoffs and helps teams iterate on experiments faster.",
  },
  {
    question: "Is there documentation to help me get started?",
    answer:
      "Absolutely. The documentation covers installation, CLI commands, customization tips, and real-world templates. You can follow step-by-step guides to generate your first landing page and extend it with additional sections or CMS data.",
  },
];

export const FAQ: FC = () => {
  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg shadow-sm border"
              >
                <AccordionTrigger className="px-4 py-4">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
