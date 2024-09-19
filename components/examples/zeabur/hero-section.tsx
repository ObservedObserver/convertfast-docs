// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import Link from "next/link";

export const HeroSection: FC = () => {
  return (
    <div className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight  mb-6 drop-shadow-md">
            Build, Ship and Scale
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Deploy your apps with one click, scale as you grow. Infra can be complex, we make it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://zeabur.com">Deploy</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://zeabur.com">Start Scale</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">Subscription + Pay as you go</p>
        </div>

        <img
          alt="app screenshot"
          src="https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fselect-service.en-US.830be5a3.png&w=3840&q=75"
          width={2432}
          height={1442}
          className="mt-8 rounded-md shadow-2xl border sm:mt-12 block dark:hidden"
        />
        <img
          alt="app screenshot"
          src="https://zeabur.com/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fselect-service.en-US.830be5a3.png&w=3840&q=75"
          width={2432}
          height={1442}
          className="mt-8 rounded-md shadow-2xl border sm:mt-12 hidden dark:block"
        />
      </div>
    </div>
  );
};
