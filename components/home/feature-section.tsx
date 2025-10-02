import { Button } from "@/components/ui/button";
import { FC } from "react";

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

const Feature: FC<FeatureProps> = ({ title, description, imageUrl, isImageLeft }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {isImageLeft && (
      <div className="order-1 md:order-1">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
    <div className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
      <h3 className="text-3xl font-bold tracking-tight  sm:text-4xl">{title}</h3>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      <div className="mt-4">
        <Button variant="link">Learn more</Button>
      </div>
    </div>
    {!isImageLeft && (
      <div className="order-1 md:order-2">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
  </div>
);

export const FeatureSection: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Rapid landing page development",
      description:
        "Generate fully responsive hero, feature, pricing, and testimonial sections from the CLI. ConvertFast UI ships with copy guidance and best-practice layouts so you can produce consistent marketing experiences in record time.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: true,
    },
    {
      title: "Customizable templates and tokens",
      description:
        "Swap colors, typography, and brand assets once and reuse them across every template. The design tokens mirror shadcn UI conventions, making it simple to align ConvertFast UI with your existing design system.",
      imageUrl: "https://ui.convertfa.st/images/convertfast-ui-cli.png",
      isImageLeft: false,
    },
    {
      title: "Code export and framework integration",
      description:
        "Export production-ready React and Tailwind code that plugs into your Next.js, Remix, or Astro project. Keep marketing pages version-controlled and collaborate with engineering using the same repository.",
      imageUrl: "https://ui.convertfa.st/images/convertfast-ui-light-demo.png",
      isImageLeft: true,
    },
    {
      title: "Performance-focused responsive design",
      description:
        "Deliver fast, accessible experiences on every device. ConvertFast UI optimizes spacing, typography, and image handling so you can meet Core Web Vitals targets while telling a compelling product story.",
      imageUrl: "https://ui.convertfa.st/images/convertfast-demo.png",
      isImageLeft: false,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold leading-7 ">ConvertFast UI feature highlights</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
          Everything you need to scale high-performing landing pages
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          ConvertFast UI is purpose-built for growth teams that need to iterate quickly. Pair our section library with your
          analytics stack, run experiments faster, and maintain a central source of truth for every campaign page.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-16">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};