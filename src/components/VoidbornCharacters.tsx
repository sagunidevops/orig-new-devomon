"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function VoidbornCharacters() {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const characters = [
    {
      name: "Yuto",
      role: "The Voidborn",
      description: "Once had a family — a daughter, a peaceful life. It was all taken when the Constellations chose others and abandoned his world. Died betrayed, watching everything burn, unheard by the stars he once prayed to.",
      keyTraits: ["Carries the weight of two lives", "Sees the Guide as a reminder of his lost daughter", "No living ties — only fractured echoes"],
      color: "purple-500",
      image: "/images/devomon-main-logo.png",
    },
    {
      name: "Crimson Ringmistress",
      role: "The Eclipse",
      description: "Once the beloved voice of grand celebrations, admired by thousands. Her voice was violently stolen by those who envied her popularity. Left broken and mute until she found a darker path.",
      keyTraits: ["Voice restored but carries torment", "Embraced the shadows for revenge", "Every word reminds the world of its cruelty"],
      color: "purple-500",
      image: "/images/devomon-main-logo.png",
    },
    {
      name: "Flokimon",
      role: "The Loyal Companion",
      description: "Formed during a collapsing world, became Yuto's first and only bond after revival. Unlike others, he didn't fear the 'Void-class' — he chose it.",
      keyTraits: ["Bond forged by shared silence and survival", "Chosen through trust, not system code", "Will stand until his last evolution or breath"],
      color: "purple-500",
      image: "/images/devomon-main-logo.png",
    },
  ];

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const character = characters[currentCharacter];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-20">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Character Overview</h2>
          </div>
        </div>

        {/* Character Display - Split Layout */}
        <div className="relative max-w-7xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            {/* Character Info - Left Side */}
            <div className="space-y-8 lg:order-1 order-2">
              <div>
                <h3 className={`text-4xl font-bold mb-4 text-${character.color} hover:text-${character.color}/80 transition-colors duration-300`}>{character.name}</h3>
                <Badge variant="outline" className={`border-${character.color}/40 text-${character.color} text-base px-4 py-2 mb-6 hover:bg-${character.color}/10 hover:border-${character.color}/60 transition-all duration-300`}>
                  {character.role}
                </Badge>
              </div>

              <p className="text-base text-gray-200 leading-relaxed">{character.description}</p>

              {/* Key Traits */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-200 mb-4">Key Traits</h4>
                {character.keyTraits.map((trait, index) => (
                  <div key={index} className={`border-l-4 border-${character.color} pl-4 py-3 hover:bg-${character.color}/10 hover:border-${character.color}/80 transition-all duration-300 rounded-r-lg group/trait`}>
                    <p className="text-gray-300 group-hover/trait:text-gray-100 transition-colors">{trait}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Image - Right Side */}
            <div className="flex justify-center items-center lg:justify-end lg:order-2 order-1 mb-8 lg:mb-0">
              {character.image ? (
                <div className="relative group">
                  {/* Multi-layered glow effect */}
                  <div className={`absolute -inset-6 bg-gradient-to-r from-${character.color}/25 via-${character.color}/15 to-transparent rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-700`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-br from-${character.color}/10 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>

                  <Image src={character.image} alt={character.name} width={500} height={500} className={`relative z-10 object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-all duration-500 ease-out ${character.name === "Flokimon" ? "scale-[0.7]" : ""}`} />
                </div>
              ) : (
                <div className={`w-80 h-80 bg-gradient-to-br from-${character.color}/20 to-${character.color}/5 rounded-3xl flex items-center justify-center border-2 border-${character.color}/30`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 bg-${character.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <div className={`w-12 h-12 border-2 border-${character.color}/40 rounded-full`}></div>
                    </div>
                    <p className={`text-${character.color} font-medium`}>Character Artwork</p>
                    <p className="text-gray-400 text-sm">Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button variant="outline" size="icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-md border-gray-600 hover:bg-gray-800/80 z-10" onClick={prevCharacter}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button variant="outline" size="icon" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-md border-gray-600 hover:bg-gray-800/80 z-10" onClick={nextCharacter}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Character Indicators */}
        <div className="flex justify-center mt-12 gap-4">
          {characters.map((char, index) => (
            <button key={index} className={`px-4 py-2 rounded-full border transition-all ${index === currentCharacter ? `bg-${char.color}/20 border-${char.color} text-${char.color}` : "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"}`} onClick={() => setCurrentCharacter(index)}>
              {char.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
