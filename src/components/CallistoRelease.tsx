import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Heart, Bell, Monitor, Gamepad2, Smartphone } from "lucide-react";

export function CallistoRelease() {
  return (
    <section className="py-20 bg-gradient-to-tr from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Release Date */}
        <div className="text-center mb-12">
          <Badge className="mb-6 text-lg px-4 py-2 bg-cyan-400/10 text-cyan-400 border-cyan-400/30" variant="outline">
            Release Info
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            2. Hälfte 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Bereite dich vor auf das ultimative Anime-Action-RPG. Crossplay zwischen allen Plattformen.
          </p>
          
          {/* Crossplay Visual */}
          <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-xl px-6 py-4 border border-cyan-400/30">
            <span className="text-lg font-semibold text-cyan-400 mr-4">Crossplay:</span>
            <div className="flex gap-3">
              <Monitor className="w-6 h-6 text-cyan-400" />
              <Gamepad2 className="w-6 h-6 text-cyan-400" />
              <Smartphone className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Wishlist Card */}
          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-6 text-center group">
            <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
              <Heart className="w-6 h-6 text-cyan-400" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">
              Zur Wishlist hinzufügen
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Verpasse den Release nicht und erhalte Benachrichtigungen zu Beta-Tests und exklusiven Updates.
            </p>
            
            <Button size="sm" className="w-full bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 border border-cyan-400/40">
              <Heart className="w-4 h-4 mr-2" />
              Jetzt zur Wishlist
            </Button>
          </Card>

          {/* Updates Card */}
          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-6 text-center group">
            <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
              <Bell className="w-6 h-6 text-cyan-400" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">
              Development Updates
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Bleib auf dem Laufenden über die neuesten Entwicklungen, Screenshots und Gameplay-Videos.
            </p>
            
            <Button size="sm" variant="outline" className="w-full border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10">
              <Bell className="w-4 h-4 mr-2" />
              Updates abonnieren
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}