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
      <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">{title}</h2>
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
      title: "Lightweight React Component",
      description: "Graphic Walker offers a compact, embeddable React component, providing a streamlined alternative to Tableau for data visualization.",
      imageUrl: "https://ui.convertfa.st/images/graphic-walker-light-2.png",
      isImageLeft: true,
    },
    {
      title: "Cloud-Native Scalability",
      description: "Designed for cloud environments, Graphic Walker efficiently handles large-scale data sets, ensuring smooth performance as your data grows.",
      imageUrl: "https://pub-8e7aa5bf51e049199c78b4bc744533f8.r2.dev/graphic-walker-banner.png",
      isImageLeft: false,
    },
    {
      title: "Open-Source Flexibility",
      description: "As an open-source solution, Graphic Walker offers full customization capabilities and community-driven improvements.",
      imageUrl: "https://docs-us.oss-us-west-1.aliyuncs.com/img/graphic-walker/graphic-walker-overview.png",
      isImageLeft: true,
    },
    {
      title: "Interactive Data Exploration",
      description: "Empower users with intuitive tools for data analysis, enabling deep insights through dynamic visualizations and interactive features.",
      imageUrl: "https://docs-us.oss-us-west-1.aliyuncs.com/images/graphic-walker/gw-area-01.png",
      isImageLeft: false,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold leading-7 ">Graphic Walker</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
          Build data visualization with simple drag-and-drop operations.
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          With Graphic Walker, you can create stunning data visualizations without writing a single line of code.
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