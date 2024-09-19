import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    id: "plan-free",
    href: "#",
    price: { monthly: "$0", annually: "$0" },
    description: "Perfect for individuals exploring AI-powered app creation.",
    actionTitle: "Get started",
    features: [
      "Create up to 3 apps",
      "Basic text-to-app generation",
      "Access to essential templates",
      "Community support",
      "48-hour email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    id: "plan-pro",
    href: "#",
    price: { monthly: "$15", annually: "$120" },
    description: "Ideal for professionals and small teams.",
    actionTitle: "Start free trial",
    features: [
      "Create up to 20 apps",
      "Advanced AI app generation",
      "Full template library access",
      "Streamlit integration",
      "Team collaboration (up to 5 members)",
      "24-hour email support",
      "Basic analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    id: "plan-enterprise",
    href: "#",
    price: { monthly: "Custom", annually: "Custom" },
    description: "Tailored solutions for large organizations.",
    actionTitle: "Contact sales",
    features: [
      "Unlimited everything",
      "Custom AI model training",
      "Full white-labeling options",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom integrations",
      "Enterprise-grade security",
      "24/7 priority support",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-muted-foreground">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight  sm:text-5xl">
            Choose the perfect plan for your needs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-center">
          Get started with lab2 AI and build data apps for analytics. Choose the plan that works best for you.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 gap-x-4 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 xl:-mx-4">
            {plans.map((plan) => (
              <Card key={plan.id} className={cn("flex flex-col", plan.popular ? "ring-1 ring-primary" : "")}>
                <CardHeader>
                  <CardTitle id={plan.id} className="text-base font-semibold leading-7">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold tracking-tight ">{plan.price.monthly}</span>
                    <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                  </CardDescription>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.price.annually} billed annually</p>
                </CardHeader>
                <CardContent>
                  <p className="mt-10 text-sm font-semibold leading-6 ">{plan.description}</p>
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" aria-describedby={plan.id} asChild>
                    <a href={plan.href}>{plan.actionTitle}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
