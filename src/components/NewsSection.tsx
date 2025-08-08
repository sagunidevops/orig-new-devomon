import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bell, Calendar, Rss } from "lucide-react";
import Link from "next/link";

export function NewsSection() {
  return (
    <section id="news" className="py-16 bg-void-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            <Bell className="w-3 h-3 mr-1" />
            Stay Informed
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-white">
            News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to know about major announcements, development milestones, and exclusive content releases.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm"></div>
            
            <div className="relative p-8 lg:p-12 text-center">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Development Updates Portal
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Our comprehensive news hub is currently in development. Soon you&apos;ll have access to detailed development blogs, 
                behind-the-scenes content, character reveals, and exclusive insights into the Devomon universe.
              </p>

              {/* Feature Preview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 rounded-lg bg-background/20 border border-border/30">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <Rss className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Dev Blogs</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    In-depth development insights and technical breakdowns
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg bg-background/20 border border-border/30">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Release Updates</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Official announcements and milestone celebrations
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg bg-background/20 border border-border/30">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                    <Bell className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Exclusive Content</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    Early access previews and community highlights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            In the meantime, explore what&apos;s already available:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/callisto">
                Game Details
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/voidborn">
                Webtoon Info
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/faq">
                FAQ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}