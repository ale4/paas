import { Shield } from "lucide-react";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">VaultGuard</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-grade privacy solutions. Protect your data, ensure compliance, and build customer trust.
            </p>
            <div className="flex gap-2 mb-4">
              <Button variant="ghost" size="icon" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <SiX className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-github">
                <SiGithub className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">SOC 2</Badge>
              <Badge variant="outline">ISO 27001</Badge>
              <Badge variant="outline">GDPR</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-data-mapping">Data Mapping</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-compliance-monitoring">Compliance Monitoring</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy-assessments">Privacy Assessments</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-breach-response">Breach Response</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-vendor-management">Vendor Management</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-training">Privacy Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-documentation">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-api-reference">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-blog">Privacy Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-webinars">Webinars</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-case-studies">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get privacy news, compliance updates, and platform announcements.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 VaultGuard. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-foreground" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-foreground" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="hover:text-foreground" data-testid="link-security">Security</a>
            <a href="#" className="hover:text-foreground" data-testid="link-status">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
