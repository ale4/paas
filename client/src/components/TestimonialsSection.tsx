import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// todo: remove mock functionality
const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CISO, TechFlow Inc.",
    content: "VaultGuard transformed our privacy compliance. What used to take weeks of manual work is now automated. We passed our SOC 2 audit with flying colors.",
    rating: 5,
    initials: "SC",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "DPO, HealthFirst",
    content: "The AI Privacy Advisor is incredible. It's like having a privacy expert available 24/7. Our team's productivity has increased significantly.",
    rating: 5,
    initials: "MR",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Legal Director, FinServe",
    content: "Real-time compliance monitoring caught a potential data breach before it happened. The ROI on this platform paid for itself within the first month.",
    rating: 5,
    initials: "EW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how organizations across industries are transforming their privacy compliance with VaultGuard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-card-border" data-testid={`card-testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
