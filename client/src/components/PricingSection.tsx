import { Check, Shield, Zap, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
}

// todo: remove mock functionality
const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "499",
    period: "/month",
    description: "For growing businesses starting their privacy journey",
    icon: Shield,
    features: [
      "Up to 5,000 data subjects",
      "Basic compliance monitoring",
      "GDPR & CCPA support",
      "Email support",
      "Monthly compliance reports",
      "1 admin user",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "1,299",
    period: "/month",
    description: "For companies requiring comprehensive privacy management",
    icon: Zap,
    features: [
      "Up to 50,000 data subjects",
      "AI-powered data mapping",
      "All global regulations",
      "Priority support + chat",
      "Real-time breach detection",
      "10 admin users",
      "API access",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex privacy requirements",
    icon: Building,
    features: [
      "Unlimited data subjects",
      "Dedicated privacy officer",
      "Custom compliance frameworks",
      "24/7 phone support",
      "On-premise deployment option",
      "Unlimited users",
      "SLA guarantees",
      "Annual privacy audit",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section className="py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your organization. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`border-card-border relative ${plan.popular ? "ring-2 ring-primary" : ""}`}
              data-testid={`card-plan-${plan.id}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "" : "$"}{plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => onSelectPlan(plan.id)}
                  data-testid={`button-select-${plan.id}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
