import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";

export function StudioSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/15 via-transparent to-accent/15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Developed by Saguni Studio
            </Badge>
            <h2 className="text-3xl font-bold mb-6 text-white">About the Studio</h2>
            <p className="text-base text-muted-foreground">Saguni Studio is an innovative development studio specializing in creating unique gaming IPs with strong narrative focus.</p>
          </div>

          {/* Studio Info */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image src="/images/saguni-logo.png" alt="Saguni Studio" width={96} height={96} className="object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Saguni Studio</h3>
                <p className="text-base text-muted-foreground mb-6">We are a passionate team of developers, artists and storytellers dedicated to creating exceptional gaming experiences. With Devomon, we&apos;re creating our first major IP - a world full of possibilities.</p>

                {/* Action Button */}
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://www.saguni.studio" target="_blank" rel="noopener noreferrer">
                    Visit Studio
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Studio Values - Simplified */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold mb-2">Vision</h4>
              <p className="text-muted-foreground">Creating international gaming brands with profound stories</p>
            </div>

            <div>
              <div className="text-4xl mb-3">💡</div>
              <h4 className="text-lg font-bold mb-2">Innovation</h4>
              <p className="text-muted-foreground">Cutting-edge technology meets creative storytelling</p>
            </div>

            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-lg font-bold mb-2">Community</h4>
              <p className="text-muted-foreground">Close collaboration with the gaming community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
