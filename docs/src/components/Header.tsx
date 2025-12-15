import { useState } from "react";
import { Search, MessageCircle, Menu, X, Shield, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onSupportClick: () => void;
  onSearchChange: (value: string) => void;
}

export function Header({ onSupportClick, onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <a href="/" className="flex items-center gap-2" data-testid="link-logo">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold tracking-tight">VaultGuard</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-solutions">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-pricing">Pricing</a>
            <a href="#compliance" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-compliance">Compliance</a>
            <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-resources">Resources</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">About</a>
          </nav>

          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search solutions..."
                value={searchValue}
                onChange={handleSearchChange}
                className="pl-10 w-full"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={onSupportClick}
              className="relative"
              data-testid="button-support"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </Button>
            <Button variant="outline" className="hidden sm:flex" data-testid="button-contact-sales">
              <Phone className="h-4 w-4 mr-2" />
              Contact Sales
            </Button>
            <Button data-testid="button-get-started">
              Get Started
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <a href="#solutions" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" data-testid="link-mobile-solutions">Solutions</a>
              <a href="#pricing" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" data-testid="link-mobile-pricing">Pricing</a>
              <a href="#compliance" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" data-testid="link-mobile-compliance">Compliance</a>
              <a href="#resources" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" data-testid="link-mobile-resources">Resources</a>
              <a href="#about" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" data-testid="link-mobile-about">About</a>
            </nav>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search solutions..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="pl-10 w-full"
                  data-testid="input-search-mobile"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
