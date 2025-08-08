import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Users, Target, Zap, Brain } from "lucide-react";

export function CallistoGameplay() {
  const features = [
    {
      icon: Users,
      title: "Team-based Combat",
      description: "Control each character directly and switch seamlessly between team members."
    },
    {
      icon: Target,
      title: "Elemental Synergies",
      description: "Combine different elements for devastating combo attacks."
    },
    {
      icon: Zap,
      title: "Real-time Action",
      description: "Fast, fluid combat with precise timing."
    },
    {
      icon: Brain,
      title: "Adaptive AI",
      description: "Intelligent enemies that adapt to your playstyle."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-3 py-1 bg-cyan-400/10 text-cyan-400 border-cyan-400/30" variant="outline">
            Gameplay System
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            Strategic Action Combat
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tactical depth meets lightning-fast action. Every battle requires strategy, timing and teamwork.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-4 text-center group">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}