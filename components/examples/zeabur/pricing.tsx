import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Serverless Plan",
    id: "plan-serverless",
    href: "#",
    price: { monthly: "$0", annually: "$0" },
    description: "Deploy static website and Serverless functions in seconds.",
    actionTitle: "Try Serverless",
    features: [
      "Deploy static and Serverless functions",
      "Free and automatic SSL certificates",
      "CI/CD out of the box",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Developer Plan",
    id: "plan-developer",
    href: "#",
    price: { monthly: "$5", annually: "$60" },
    description: "Deploy both Serverless and Containerized services with priority support.",
    actionTitle: "Deploy with Developer Plan",
    features: [
      "All Serverless features",
      "Deploy containerized services",
      "Up to 2 vCPU and 4GB memory for each container",
      "Backup services and data",
      "Deploy prebuilt images",
      "Priority technical support",
    ],
    popular: true,
  },
  {
    name: "Team Plan",
    id: "plan-team",
    href: "#",
    price: { monthly: "$80", annually: "$960" },
    description: "For teams with fast growing business, focus on performance and scalability.",
    actionTitle: "Your Current Plan",
    features: [
      "All Serverless and Developer features",
      "Up to 4 vCPU and 16GB memory for each container",
      "Priority builds and deployments",
      "Dedicated support team contact group",
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
        Zeabur offers three different plans for you, choose the best plan to boost your services and save your time and money.
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
