import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, MessageCircle, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Kontakt aufnehmen
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Lass uns sprechen</h2>
            <p className="text-lg text-muted-foreground">
              Hast du Fragen zu Devomon oder möchtest mit unserem Team in Kontakt treten?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Inquiries */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">General</CardTitle>
                <CardDescription className="text-sm">
                  Allgemeine Anfragen
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link href="/support">
                    Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Inquiries */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Business</CardTitle>
                <CardDescription className="text-sm">
                  Partnerships & Business
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link href="/support">
                    Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Press */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Twitter className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Press</CardTitle>
                <CardDescription className="text-sm">
                  Presse & Medien
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link href="/support">
                    Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Community Support */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5865F2] to-[#5865F2]/80 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Support</CardTitle>
                <CardDescription className="text-sm">
                  Community Support
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href="https://discord.gg/ar7Ax79J" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
            <p className="text-muted-foreground mb-4">
              Für schnelle Antworten besuche unseren Discord Server oder folge uns auf Social Media.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Antwort innerhalb von 24h</span>
              <div className="w-px h-4 bg-border"></div>
              <span>Deutsch & English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}