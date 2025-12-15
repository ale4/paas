import { Shield, Users, FileCheck, Clock } from "lucide-react";

// todo: remove mock functionality
const stats = [
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients",
    description: "Across 40+ countries",
  },
  {
    icon: FileCheck,
    value: "50+",
    label: "Regulations",
    description: "Covered globally",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Expert Support",
    description: "Privacy professionals on call",
  },
];

export function ComplianceStats() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
