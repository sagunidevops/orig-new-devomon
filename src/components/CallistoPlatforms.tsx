import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Monitor, Gamepad2, Smartphone, Download, 
  Heart, Bell, ExternalLink, Trophy 
} from "lucide-react";

export function CallistoPlatforms() {
  const platforms = [
    {
      icon: Monitor,
      name: "PC",
      description: "Windows, Mac & Linux",
      stores: ["Steam", "Epic Games", "GOG"],
      features: ["4K Support", "Ray Tracing", "Mod Support"],
      color: "primary"
    },
    {
      icon: Gamepad2,
      name: "Konsole",
      description: "PlayStation & Xbox",
      stores: ["PlayStation Store", "Microsoft Store"],
      features: ["Crossplay", "Smart Features", "4K Gaming"],
      color: "blue-500"
    },
    {
      icon: Smartphone,
      name: "Mobile",
      description: "iOS & Android",
      stores: ["App Store", "Google Play"],
      features: ["Touch Controls", "Cloud Sync", "Cross-Progress"],
      color: "green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 text-lg px-4 py-2" variant="secondary">
            Verfügbare Plattformen
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Spiele überall
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Devomon: Callisto wird auf allen großen Gaming-Plattformen verfügbar sein. 
            Crossplay ermöglicht es dir, mit Freunden zu spielen, egal welche Platform sie nutzen.
          </p>
          
          {/* Crossplay Highlight */}
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-md rounded-xl px-6 py-3 border border-primary/30 glow-primary">
            <Trophy className="w-5 h-5 text-primary mr-2" />
            <span className="text-lg font-semibold text-primary">Vollständiges Crossplay zwischen allen Plattformen</span>
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            
            return (
              <Card key={index} className="border-2 border-gray-800 bg-black/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group hover:glow-primary">
                <CardHeader className="text-center p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${platform.color}/30 to-${platform.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${platform.color === 'primary' ? 'text-primary' : `text-${platform.color}`}`} />
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {platform.name}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 mb-4">
                    {platform.description}
                  </CardDescription>
                  
                  {/* Stores */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Verfügbar auf:</p>
                    <div className="space-y-1">
                      {platform.stores.map((store, storeIndex) => (
                        <Badge key={storeIndex} variant="outline" className="text-xs">
                          {store}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Features:</p>
                    <div className="space-y-1">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                          <div className={`w-1.5 h-1.5 rounded-full ${platform.color === 'primary' ? 'bg-primary' : `bg-${platform.color}`} mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-black/60 backdrop-blur-md rounded-2xl p-10 border border-primary/40 glow-primary">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Bleib auf dem Laufenden
              </h3>
              
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Erhalte Updates zu Release-Terminen, Beta-Tests und exklusiven Inhalten für Devomon: Callisto
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg px-8 py-4 glow-primary hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5 mr-2" />
                  Zur Wishlist hinzufügen
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-transform"
                >
                  <Bell className="w-5 h-5 mr-2" />
                  Release-Benachrichtigung
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-purple-500/50 hover:bg-purple-500/10 hover:scale-105 transition-transform"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Presskit herunterladen
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Folge der Entwicklung:</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-[#5865F2]/50 hover:bg-[#5865F2]/10">
                    Discord Community
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-500/50 hover:bg-gray-500/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Whitepaper
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}