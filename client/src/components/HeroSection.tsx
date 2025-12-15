import { Button } from "@/components/ui/button";
import { Shield, Lock, FileCheck, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/digital_security_shield_hero.png";

interface HeroSectionProps {
  onExploreClick: () => void;
  onDemoClick: () => void;
}

export function HeroSection({ onExploreClick, onDemoClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-white/80">Privacy-as-a-Service</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Enterprise Privacy Protection, Simplified
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Comprehensive data protection with AI-powered compliance monitoring, 
            automated privacy assessments, and 24/7 expert support. Stay compliant with GDPR, CCPA, and beyond.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={onExploreClick}
              data-testid="button-explore"
            >
              View Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDemoClick}
              className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
              data-testid="button-demo"
            >
              <Lock className="mr-2 h-4 w-4" />
              Request Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-green-400" />
              <span>500+ Enterprise Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
