// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <div className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight  mb-6 drop-shadow-md">
            Let AI to build your apps
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Focus on real world problems, let lab2 AI to build your apps. Turn ideas to real app with simple text prompts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://lab2.dev">Start build</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://lab2.dev">Idea to App now</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500"></p>
        </div>

        <img
          alt="app screenshot"
          // src="https://wytpxelzxt4rwwd2.public.blob.vercel-storage.com/lab2/demos/lab2-demo1-zZeBicNU2jrHp0w77ZjILAJQK8bmRP.png"
          src="https://wytpxelzxt4rwwd2.public.blob.vercel-storage.com/lab2/demos/lab2-demo3-0S5JE1xYQA8eF3FTywE3z6GfDzLLh4.png"
          width={2432}
          height={1442}
          className="mt-8 rounded-md shadow-2xl border sm:mt-12"
        />
      </div>
    </div>
  );
};
