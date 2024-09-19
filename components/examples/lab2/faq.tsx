import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is lab2?",
    answer: "lab2 is an AI-powered tool that allows you to build small data apps or AI apps using simple text prompts, without requiring coding skills."
  },
  {
    question: "Do I need coding experience to use lab2?",
    answer: "No, lab2 is designed for users with all levels of technical expertise. You can create apps using simple text prompts without any coding required."
  },
  {
    question: "What types of apps can I build with lab2?",
    answer: "With lab2, you can build a variety of data and AI apps, including Streamlit apps, data visualization tools, machine learning models, and more."
  },
  {
    question: "How does lab2 integrate with Streamlit?",
    answer: "lab2 can generate Streamlit apps automatically based on your text prompts, allowing you to create interactive data apps quickly and easily."
  },
  {
    question: "Can I collaborate with my team using lab2?",
    answer: "Yes, lab2 provides collaborative features that allow you to share your apps with team members, gather feedback, and make real-time iterations."
  },
  {
    question: "How accurate are the AI-generated apps?",
    answer: "lab2 uses advanced AI to create apps, but we recommend reviewing and testing the generated apps to ensure they meet your specific requirements. You can easily make adjustments as needed."
  },
  {
    question: "Is there a limit to the number of apps I can create?",
    answer: "The number of apps you can create may depend on your subscription plan. Please check our pricing page or contact our support team for more details."
  },
  {
    question: "Can I customize the apps after they're generated?",
    answer: "Yes, you can customize and refine the AI-generated apps to better suit your needs. lab2 provides options for manual adjustments and further AI-assisted improvements."
  },
  {
    question: "What kind of support does lab2 offer?",
    answer: "We offer comprehensive documentation, video tutorials, and a responsive customer support team to help you make the most of lab2. Premium plans may include additional support options."
  },
  {
    question: "Is my data safe with lab2?",
    answer: "We take data security seriously. lab2 employs industry-standard encryption and security measures to protect your data and ensure your privacy. For more details, please review our privacy policy."
  }
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
