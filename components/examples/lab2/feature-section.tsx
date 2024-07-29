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
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
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
      title: "AI-Powered App Creation",
      description: "Build data and AI apps with simple text prompts - no coding required.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: true,
    },
    {
      title: "Streamlit Integration",
      description: "Generate Streamlit apps in minutes using AI assistance.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: false,
    },
    {
      title: "Focus on Solutions",
      description: "Concentrate on real-world problems while lab2 AI handles app development.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: true,
    },
    {
      title: "Collaborative Workspace",
      description: "Share apps instantly, gather feedback, and iterate in real-time.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: false,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold leading-7 text-primary">lab2 AI</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
          Everything you need to build landing pages
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Got a quick idea that you want to test with data? lab2 AI is the perfect tool for you. It helps you build small data apps for analytics.
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