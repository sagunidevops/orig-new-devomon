import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { 
  Users, Target, Cpu, Globe, Sparkles, Sword, 
  Zap, Shield, Brain 
} from "lucide-react";

export function CallistoFeatures() {
  const features = [
    {
      icon: Users,
      title: "Voll steuerbare Charaktere & Evomon",
      description: "Jeder spielbare Held, ob Mensch oder Kreatur, ist frei kontrollierbar. Keine automatischen Begleiter, sondern vollständige Team-Mitglieder mit eigenen Fähigkeiten und Rollen.",
      color: "primary",
      details: [
        "Freie Charakterwahl im Team",
        "Individuelle Skillsets",
        "Rollentausch in Echtzeit",
        "Persönlichkeits-KI"
      ]
    },
    {
      icon: Target,
      title: "Synergie- & Taktik-System",
      description: "Kombiniere Klassen, Elemente und Ultimates für maximale Effizienz im Kampf. Synergieeffekte und Rollenverteilung spielen eine zentrale Rolle.",
      color: "purple-500",
      details: [
        "Elementare Kombinationen",
        "Team-Synergien",
        "Ultimative Fähigkeiten",
        "Taktische Formationen"
      ]
    },
    {
      icon: Cpu,
      title: "AI-Driven Encounter & Boss Design",
      description: "Anspruchsvolle Gegnerlogik, skalierende Bosse und immersives Verhalten von NPCs durch ein fortschrittliches KI-System.",
      color: "orange-500",
      details: [
        "Adaptive Boss-KI",
        "Dynamische Schwierigkeit",
        "Lernende Gegner",
        "Immersive NPCs"
      ]
    },
    {
      icon: Globe,
      title: "Crossplay & Multiplayer",
      description: "Spiele plattformübergreifend mit Freunden – verfügbar für PC, Konsole und Mobile. PvP & Coop-Modi inklusive.",
      color: "green-500",
      details: [
        "Plattformübergreifend",
        "PvP Arena",
        "Coop Campaigns",
        "Guild System"
      ]
    },
    {
      icon: Sparkles,
      title: "Anime-Stil auf AAA-Niveau",
      description: "Einzigartiger visueller Look mit hohem Produktionswert – inspiriert von Titeln wie Genshin Impact, Solo Leveling und Wuthering Waves.",
      color: "pink-500",
      details: [
        "High-End Anime Grafiken",
        "Cinematische Cutscenes",
        "Flüssige Animationen",
        "Atmosphärische Effekte"
      ]
    },
    {
      icon: Sword,
      title: "Strategisches Combat System",
      description: "Intensive Echtzeit-Schlachten mit taktischen Elementen und Team-Koordination. Jede Entscheidung zählt im Kampf.",
      color: "cyan-500",
      details: [
        "Echtzeit-Combat",
        "Combo-System",
        "Positionierung wichtig",
        "Timing-basierte Aktionen"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-purple-500/15"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Was macht Callisto besonders?
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Entdecke die einzigartigen Features, die Devomon: Callisto zu einem 
            besonderen Action-RPG-Erlebnis machen
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClass = feature.color === 'primary' ? 'primary' : feature.color;
            
            return (
              <Card key={index} className="border-2 border-gray-800 bg-black/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group hover:glow-primary overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}/5 to-transparent opacity-50`}></div>
                <CardHeader className="relative z-10 p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${colorClass}/30 to-${colorClass}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${feature.color === 'primary' ? 'text-primary' : `text-${colorClass}`}`} />
                  </div>
                  
                  <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Feature Details */}
                  <div className="grid grid-cols-2 gap-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-400">
                        <div className={`w-2 h-2 rounded-full ${feature.color === 'primary' ? 'bg-primary' : `bg-${colorClass}`} mr-2`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-10 border border-cyan-400/30">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold mb-4 text-cyan-400">Technische Highlights</h3>
            <p className="text-xl text-gray-300">Modernste Gaming-Technologie für das beste Spielerlebnis</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">KI-Engine</h4>
              <p className="text-gray-400">Adaptive Gegner-KI und dynamische Schwierigkeitsanpassung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Performance</h4>
              <p className="text-gray-400">60 FPS auf allen Plattformen mit optimierter Engine</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Anti-Cheat</h4>
              <p className="text-gray-400">Integriertes Anti-Cheat-System für fairen Multiplayer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}