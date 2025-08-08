import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, ImageIcon } from "lucide-react";

export function CallistoScreenshots() {
  const screenshots = [
    {
      title: "Combat System",
      description: "Intensives Team-Combat mit strategischen Elementen",
      type: "Gameplay",
      color: "primary"
    },
    {
      title: "Character Design", 
      description: "Anime-Stil Charaktere und Evomon Kreaturen",
      type: "Art",
      color: "purple-500"
    },
    {
      title: "World Exploration",
      description: "Erkunde die düstere Fantasy-Welt von Callisto",
      type: "Environment",
      color: "green-500"
    },
    {
      title: "Team Formation",
      description: "Stelle dein perfektes Team zusammen",
      type: "Strategy",
      color: "orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 text-lg px-4 py-2" variant="secondary">
            Gameplay Preview
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Erste Einblicke in Callisto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecke Screenshots und Gameplay-Material aus der Entwicklung von Devomon: Callisto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="relative bg-black/40 backdrop-blur-md border border-gray-800 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative flex items-center justify-center">
                {/* Placeholder for screenshot */}
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-gray-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    Coming Soon
                  </Badge>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all">
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-${screenshot.color}/20 text-${screenshot.color === 'primary' ? 'primary' : screenshot.color} border-${screenshot.color === 'primary' ? 'primary' : screenshot.color}/40`}>
                      {screenshot.type}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold mb-2 text-white">{screenshot.title}</h3>
                    <p className="text-gray-300 text-sm">{screenshot.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-black/60 backdrop-blur-md rounded-xl px-8 py-4 border border-primary/30">
            <Play className="w-6 h-6 text-primary mr-3" />
            <span className="text-xl text-gray-300">
              Gameplay-Trailer und Screenshots kommen bald!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}