'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wann erscheint Devomon: Callisto?",
    answer: "Devomon: Callisto wird Q4 2025 international veröffentlicht."
  },
  {
    question: "Mit welcher Engine wird das Spiel entwickelt?",
    answer: "Das Spiel wird mit der Unreal Engine entwickelt und ist bereits seit 2 Jahren in Entwicklung."
  },
  {
    question: "Welche Plattformen werden unterstützt?",
    answer: "PC, Konsole und Mobile mit vollständigem Crossplay-Support zwischen allen Plattformen."
  },
  {
    question: "Ist das Spiel kostenlos spielbar?",
    answer: "Ja, Free-to-Play mit optionalen Käufen. Das Spiel nutzt ein Gacha-System und bietet In-Game-Käufe für Kosmetika."
  },
  {
    question: "Gibt es tradeable Assets im Spiel?",
    answer: "Ja, ausgewählte seltene Assets sind durch Blockchain-Technologie zwischen Spielern handelbar. Diese Funktion ist vollständig optional."
  },
  {
    question: "Wie funktioniert das Gameplay?",
    answer: "Story-fokussiertes Action-RPG mit strategischem Team-Combat, Dungeons, Quests und Elemente-Synergien."
  },
  {
    question: "Gibt es PvP und PvE Inhalte?",
    answer: "Ja, das Spiel bietet sowohl PvE-Inhalte (Dungeons, Quests) als auch PvP-Modi für kompetitive Spieler."
  },
  {
    question: "Ist die Story mit dem Webtoon verbunden?",
    answer: "Ja, die Story ist canon-verbunden mit dem Webtoon 'Devomon: Voidborn' und spielt im selben Universum."
  },
  {
    question: "Wird es regelmäßige Updates geben?",
    answer: "Als Live-Service-Game erhält Callisto regelmäßig neue Inhalte, Story-Fortsetzungen und Features."
  }
];

export function CallistoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/30" variant="outline">
            Häufig gestellte Fragen
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Alles über Callisto
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Finde Antworten auf die wichtigsten Fragen zum kommenden Action-RPG
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-3 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <div className="h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 mb-3"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-lg p-6 border border-primary/30 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-white">
              Mehr Fragen?
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Trete unserer Community bei und erhalte Updates direkt von den Entwicklern.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://discord.gg/ar7Ax79J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 rounded-lg transition-all duration-300 text-sm font-medium"
              >
                Discord beitreten
              </a>
              <a
                href="mailto:contact@devomon.io"
                className="inline-flex items-center justify-center px-4 py-2 bg-transparent hover:bg-gray-800/50 text-gray-300 border border-gray-600 rounded-lg transition-all duration-300 text-sm font-medium"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}