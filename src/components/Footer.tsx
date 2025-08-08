import { Briefcase, Twitter, Youtube, Instagram, FileText, MessageCircle, Video, Zap, HelpCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content - Modern Horizontal Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold mb-2">Devomon</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              A fantasy universe where strategy meets adventure.
            </p>
          </div>

          {/* Center: Social Icons + Key Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            {/* Social Icons - Compact Row */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Follow</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://x.com/OfficialDevomon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-black hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.youtube.com/@devomon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-red-600 hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.twitch.tv/devomonofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="Twitch"
                >
                  <Video className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://discord.gg/ar7Ax79J" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-indigo-600 hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="Discord"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.instagram.com/devomonofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@devomonofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-muted/20 hover:bg-black hover:text-white transition-all duration-200 rounded-md group"
                  aria-label="TikTok"
                >
                  <Zap className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Key Actions - Compact */}
            <div className="flex items-center gap-3">
              <a 
                href="https://sagunitech.gitbook.io/whitepaper-devomon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/90 border border-primary/20 hover:border-primary/30 transition-all duration-200 rounded-md text-xs font-medium"
              >
                <FileText className="w-3 h-3" />
                Whitepaper
              </a>
            </div>
          </div>

          {/* Right: Company Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/careers" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Briefcase className="w-3 h-3" />
              Careers
            </Link>
            <Link href="/support" className="flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors font-medium">
              <HelpCircle className="w-3 h-3" />
              Support
            </Link>
            
            {/* Legal Links - More Subtle */}
            <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground/80">
              <a 
                href="https://drive.google.com/drive/folders/1fk9G5QDxFMqVeOBJqsyNkE0ipl3rx6ZE?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                Press Kit
              </a>
              <Link href="/privacy" className="hover:text-muted-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-muted-foreground transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-muted-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>

        {/* Mobile Legal Links */}
        <div className="sm:hidden flex flex-wrap gap-4 mt-6 pt-4 border-t border-border/30 text-xs text-muted-foreground/80">
          <a 
            href="https://drive.google.com/drive/folders/1fk9G5QDxFMqVeOBJqsyNkE0ipl3rx6ZE?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            Press Kit
          </a>
          <Link href="/privacy" className="hover:text-muted-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-muted-foreground transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-muted-foreground transition-colors">Cookie Policy</Link>
        </div>

        {/* Bottom Copyright - Minimal */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-center text-xs text-muted-foreground/70">
            © 2024 Devomon Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}