import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { useToast } from "@/hooks/use-toast";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIFeaturesSection } from "@/components/AIFeaturesSection";
import { ComplianceStats } from "@/components/ComplianceStats";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { AIChatPanel } from "@/components/AIChatPanel";
import { DemoModal } from "@/components/DemoModal";

function HomePage() {
  const { toast } = useToast();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectPlan = (planId: string) => {
    if (planId === "enterprise") {
      setIsDemoOpen(true);
    } else {
      toast({
        title: "Starting Free Trial",
        description: `You've selected the ${planId} plan. Redirecting to signup...`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSupportClick={() => setIsChatOpen(true)}
        onSearchChange={setSearchQuery}
      />

      <main>
        <HeroSection
          onExploreClick={scrollToSolutions}
          onDemoClick={() => setIsDemoOpen(true)}
        />

        <ComplianceStats />

        <AIFeaturesSection
          onTryAISupport={() => setIsChatOpen(true)}
          onTryAssessment={() => {
            toast({
              title: "Starting Data Assessment",
              description: "Launching automated data discovery scan...",
            });
          }}
          onTryCompliance={() => {
            toast({
              title: "Opening Compliance Dashboard",
              description: "Loading real-time compliance metrics...",
            });
          }}
        />

        <PricingSection onSelectPlan={handleSelectPlan} />

        <TestimonialsSection />
      </main>

      <Footer />

      <AIChatPanel
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route>
        <div className="flex items-center justify-center min-h-screen">
          <p>Page not found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
