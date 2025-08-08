'use client';

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { MessageCircle, Bell, FileText } from "lucide-react";
import { useState } from "react";

export function CommunitySection() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-primary/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Community Hub</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Verbinde dich mit anderen Fans, erhalte exklusive Updates und 
            gestalte die Zukunft von Devomon mit!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm hover:glow-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#5865F2] to-[#5865F2]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform glow-primary">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Discord Server</CardTitle>
              <CardDescription>
                Chatte mit anderen Fans, teile Fan-Art und erhalte die neuesten Updates
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#4752C4]"
                asChild
              >
                <a 
                  href="https://discord.gg/ar7Ax79J" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Discord beitreten
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm hover:glow-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform glow-primary">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Whitepaper</CardTitle>
              <CardDescription>
                Detaillierte Einblicke in die Welt, Gameplay-Mechaniken und Vision
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weltbeschreibung</span>
                  <Badge variant="secondary">Vollständig</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Gameplay Details</span>
                  <Badge variant="secondary">Exklusiv</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Evomon Guide</span>
                  <Badge variant="secondary">Neu</Badge>
                </div>
              </div>
              <Button 
                className="w-full" 
                variant="outline"
                asChild
              >
                <a 
                  href="https://sagunitech.gitbook.io/whitepaper-devomon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Whitepaper lesen
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm hover:glow-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform glow-primary">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Newsletter</CardTitle>
              <CardDescription>
                Exklusive Updates, Behind-the-Scenes Content und Early Access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="deine@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Anmelden
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Kein Spam - nur wichtige Updates
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}