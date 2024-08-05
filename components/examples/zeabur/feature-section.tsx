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
      title: "CI/CD without configuration",
      description: "Your service has a new version to deploy? Just push the code to GitHub, and the new version will be automatically online.",
      imageUrl: "https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fsection-2.0ba32204.png&w=3840&q=75",
      isImageLeft: false,
    },
    {
      title: "Deploy Your Application Close to Your Users",
      description: "With the Zeabur Edge Network, your services will operate on various nodes around the world, allowing users to receive responses from the data center closest to them when they access your services.",
      imageUrl: "https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fcreate-project.e8778b65.png&w=3840&q=75",
      isImageLeft: true,
    },
    {
      title: "Auto Scaling",
      description: "As your service needs more and more demand, we can automatically expand the resources it needs.",
      imageUrl: "https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fmemory.a967128f.png&w=3840&q=75",
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