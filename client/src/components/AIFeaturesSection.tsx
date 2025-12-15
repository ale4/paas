import { MessageCircle, Shield, FileSearch, AlertTriangle, Bot, Lock, Scale, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AIFeaturesSectionProps {
  onTryAISupport: () => void;
  onTryAssessment: () => void;
  onTryCompliance: () => void;
}

const features = [
  {
    icon: Bot,
    title: "AI Privacy Advisor",
    description: "Get instant answers to privacy questions. Our AI understands GDPR, CCPA, HIPAA, and 50+ global regulations.",
    action: "Chat Now",
    key: "support",
  },
  {
    icon: FileSearch,
    title: "Automated Data Mapping",
    description: "Automatically discover and classify personal data across your systems. Generate accurate data flow diagrams.",
    action: "Start Scan",
    key: "assessment",
  },
  {
    icon: Scale,
    title: "Compliance Monitoring",
    description: "Real-time monitoring of your privacy posture with automated alerts for regulatory changes and violations.",
    action: "View Dashboard",
    key: "compliance",
  },
  {
    icon: AlertTriangle,
    title: "Breach Detection",
    description: "Proactive threat detection and automated incident response. Get alerted before breaches escalate.",
    action: null,
    key: "breach",
  },
];

export function AIFeaturesSection({ onTryAISupport, onTryAssessment, onTryCompliance }: AIFeaturesSectionProps) {
  const handleAction = (key: string) => {
    switch (key) {
      case "support":
        onTryAISupport();
        break;
      case "assessment":
        onTryAssessment();
        break;
      case "compliance":
        onTryCompliance();
        break;
    }
  };

  return (
    <section className="py-16 bg-muted/30" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">AI-Powered Privacy Platform</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leverage artificial intelligence to automate compliance, reduce risk, 
            and protect sensitive data across your entire organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.key}
              className="border-card-border hover-elevate"
              data-testid={`card-feature-${feature.key}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                {feature.action && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAction(feature.key)}
                    data-testid={`button-try-${feature.key}`}
                  >
                    {feature.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
