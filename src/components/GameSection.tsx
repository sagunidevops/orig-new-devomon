import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Gamepad2, Users, Sword, Globe, 
  Play, Monitor, Cpu, Target,
  Sparkles
} from "lucide-react";

export function GameSection() {
  return (
    <section id="game" className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-accent/15"></div>
        {/* Gaming grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Game Hero Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 text-lg px-4 py-2" variant="secondary">
            Crossplay Anime-Action-RPG
          </Badge>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Devomon: Callisto
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Taktische Kämpfe mit einer düsteren Fantasywelt. Intensive Echtzeit-Schlachten 
            mit voll steuerbaren Charakteren und strategischem Team-Combat.
          </p>
          
          {/* Platform Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="px-3 py-1 border-primary/40 text-primary">
              <Monitor className="w-4 h-4 mr-1" />
              PC
            </Badge>
            <Badge variant="outline" className="px-3 py-1 border-primary/40 text-primary">
              <Gamepad2 className="w-4 h-4 mr-1" />
              PlayStation
            </Badge>
            <Badge variant="outline" className="px-3 py-1 border-primary/40 text-primary">
              <Gamepad2 className="w-4 h-4 mr-1" />
              Xbox
            </Badge>
            <Badge variant="outline" className="px-3 py-1 border-primary/40 text-primary">
              <Gamepad2 className="w-4 h-4 mr-1" />
              Nintendo Switch
            </Badge>
          </div>
          
          {/* Release Info */}
          <div className="inline-flex items-center bg-black/60 backdrop-blur-md rounded-xl px-6 py-3 border border-primary/30 glow-primary">
            <Play className="w-5 h-5 text-primary mr-2" />
            <span className="text-xl font-semibold text-primary">Release: 2. Hälfte 2026</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Key Features</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Erlebe einzigartige Features, die Devomon: Callisto zu einem besonderen Gaming-Erlebnis machen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Voll steuerbare Charaktere & Evomon</CardTitle>
                <CardDescription className="text-gray-300">
                  Jeder Held ist frei kontrollierbar - keine automatischen Begleiter, sondern vollständige Team-Mitglieder
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-xl">Synergie- & Taktik-System</CardTitle>
                <CardDescription className="text-gray-300">
                  Kombiniere Klassen, Elemente und Ultimates für maximale Effizienz im Team-Combat
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7 text-orange-400" />
                </div>
                <CardTitle className="text-xl">AI-Driven Encounter Design</CardTitle>
                <CardDescription className="text-gray-300">
                  Anspruchsvolle Gegnerlogik und skalierende Bosse durch fortschrittliche KI-Systeme
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-green-400" />
                </div>
                <CardTitle className="text-xl">Crossplay & Multiplayer</CardTitle>
                <CardDescription className="text-gray-300">
                  Plattformübergreifend mit Freunden spielen - PvP & Coop-Modi inklusive
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500/30 to-pink-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-pink-400" />
                </div>
                <CardTitle className="text-xl">Anime-Stil auf AAA-Niveau</CardTitle>
                <CardDescription className="text-gray-300">
                  Einzigartiger visueller Look mit hohem Produktionswert - inspiriert von Top-Titeln
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-black/40 backdrop-blur-md hover:glow-primary group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sword className="w-7 h-7 text-cyan-400" />
                </div>
                <CardTitle className="text-xl">Strategisches Combat</CardTitle>
                <CardDescription className="text-gray-300">
                  Intensive Echtzeit-Schlachten mit taktischen Elementen und Team-Koordination
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>




      </div>
    </section>
  );
}