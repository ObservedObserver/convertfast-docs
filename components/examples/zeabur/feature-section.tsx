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
      title: "Deploy any service in minutes",
      description: "Stop worrying about the infrastructure and focus on building your app. Deploy your services with one click.",
      imageUrl: "https://zeabur.com/images/project.svg",
      isImageLeft: true,
    },
    {
      title: "Customizable Templates",
      description: "Start your app from templates or build your own.",
      imageUrl: "https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fsection-2.0ba32204.png&w=3840&q=75",
      isImageLeft: false,
    },
    {
      title: "Code Export and Integration",
      description: "Export clean, optimized code that seamlessly integrates with your existing projects, saving valuable development time.",
      imageUrl: "https://zeabur.com/images/project.svg",
      isImageLeft: true,
    },
    {
      title: "Responsive Design",
      description: "Create mobile-friendly landing pages that look great on all devices, ensuring a consistent user experience.",
      imageUrl: "https://zeabur.com/images/project.svg",
      isImageLeft: false,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-base font-semibold leading-7 text-primary">Zeabur</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
          The PaaS of the developers, by the developers, for the developers.
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The Infra you need to build and ship fast.
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