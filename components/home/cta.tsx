import { FC } from "react";
import { Button } from "@/components/ui/button";
// import { BGShapeCircle } from "@/components/bg-shape-circle";

export const CTA: FC = () => {
  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat inset-0 top-0 bottom-0 left-0 right-0 grayscale bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build your high-converting landing page?
          </h2>
          <p className="mt-6 text-xl leading-8 opacity-90 text-muted-foreground">
            With ConvertFast, you can create stunning landing pages that turn visitors into customers. Start building for free and see the difference. This is not real product, just a showcase of generated landing page.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Get started for free
            </Button>
            <Button size="lg" className="w-full sm:w-auto">
              View documentation
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75 text-muted-foreground">
            No credit card required. Start building in minutes.
          </p>
        </div>
      </div>
    </section>
  );
};