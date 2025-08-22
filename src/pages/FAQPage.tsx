"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("general");

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const categories = [
    { id: "general", name: "General", color: "indigo" },
    { id: "callisto", name: "Callisto Game", color: "blue" },
    { id: "voidborn", name: "Voidborn Webtoon", color: "purple" },
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: "What is Devomon?",
        answer: "Devomon is a dark fantasy IP consisting of the webtoon 'Voidborn' and the action-RPG 'Devomon: Callisto'. Both take place in the same universe with focus on story, character development and collectible monsters.",
      },
      {
        id: 2,
        question: "In what order should I consume the content?",
        answer: "You can start with either! The webtoon 'Voidborn' provides deep lore and background story, while 'Devomon: Callisto' offers the playable action experience. Both complement each other perfectly.",
      },
      {
        id: 3,
        question: "Will there be crossover content between webtoon and game?",
        answer: "Yes! Characters, locations and events will be shared between both media. Players can discover references from the webtoon in the game and vice versa.",
      },
      {
        id: 4,
        question: "Are there blockchain features?",
        answer: "Optionally yes! Rare limited assets can be traded between players. This is completely optional and does not change the core gameplay.",
      },
    ],
    callisto: [
      {
        id: 5,
        question: "When will Devomon: Callisto be released?",
        answer: "Devomon: Callisto is planned for 2026. We will regularly publish updates on development progress.",
      },
      {
        id: 6,
        question: "On which platforms will Devomon: Callisto be available?",
        answer: "Devomon: Callisto will be released for Mobile and PC first, followed by PlayStation 5, Xbox Series X/S and Nintendo Switch.",
      },
      {
        id: 7,
        question: "How does the combat system work?",
        answer: "Devomon: Callisto offers strategic real-time battles with Evomon teams. Combine elemental attacks, use environmental advantages and develop tactical strategies for every battle.",
      },
      {
        id: 8,
        question: "Can I customize my Evomon?",
        answer: "Yes! Each Evomon has multiple evolution paths, skill trees and customization options. Create unique teams that reflect your playstyle.",
      },
      {
        id: 9,
        question: "Are there multiplayer features?",
        answer: "Devomon: Callisto focuses on single-player story, but there will be optional co-op missions and PvP arenas for competitive battles.",
      },
      {
        id: 16,
        question: "Do I need a permanent internet connection for Devomon: Callisto?",
        answer: "Devomon: Callisto is designed as a live service and always requires an active online connection to enable dynamic events, leaderboards and fair PvP matches.",
      },
      {
        id: 17,
        question: "What social features and community tools are integrated?",
        answer: "You can chat directly in-game, found guilds and jump to the official Discord, Twitter and more with one click - so you always stay connected.",
      },
      {
        id: 18,
        question: "Is there a solo story mode?",
        answer: "Yes, the entire main campaign can be played solo and offers you an epic story with deep character arcs and challenging boss fights.",
      },
      {
        id: 19,
        question: "How does Devomon: Callisto connect to the webtoon universe?",
        answer: "The webtoon 'Devomon: Voidborn' seamlessly continues at the end of the Devomon: Callisto story, so your game decisions are directly reflected in the continuation.",
      },
      {
        id: 20,
        question: "How often are new Evomon and characters released?",
        answer: "Every month we deliver an update with new Evomon evolution forms, unlockable characters and fresh quests - keeping the world always in motion.",
      },
      {
        id: 21,
        question: "Are expansions or DLC packages planned?",
        answer: "Absolutely. From release onwards, free story expansions, additional zones and new game modes will follow, with which Devomon: Callisto will grow long-term.",
      },
      {
        id: 22,
        question: "Can I customize my human characters?",
        answer: "Yes and they have temporary awakening forms that can be unlocked during intense battles.",
      },
    ],
    voidborn: [
      {
        id: 11,
        question: "When does the Voidborn webtoon start?",
        answer: "Devomon: Voidborn will be released at the end of 2025. The first chapter will be available for free on all major webtoon platforms.",
      },
      {
        id: 12,
        question: "How often are new chapters released?",
        answer: "New chapters are published weekly. We plan a consistent release schedule without longer breaks.",
      },
      {
        id: 13,
        question: "Is the webtoon free?",
        answer: "Yes! Voidborn will be available for free. Premium content like early chapter previews and bonus material will be offered optionally.",
      },
      {
        id: 14,
        question: "On which platforms can I read Voidborn?",
        answer: "Voidborn will be available on Webtoon, Tapas, and our own website. Mobile apps for iOS and Android are planned.",
      },
      {
        id: 15,
        question: "Who creates the webtoon?",
        answer: "Voidborn is created by the Saguni Studio team, with professional mangaka and storytelling experts from the anime/manga industry.",
      },
    ],
  };

  const currentFAQs = faqData[activeCategory as keyof typeof faqData];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-void-hero void-particles py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Here you will find answers to the most frequently asked questions about Devomon: Callisto, Devomon: Voidborn and the entire universe.</p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-primary-section relative section-divider py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 rounded-lg transition-colors ${activeCategory === category.id ? `bg-${category.color}-600 text-white` : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-secondary-section relative section-divider py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {currentFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden">
                <button onClick={() => toggleItem(faq.id)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors">
                  <span className="text-lg">{faq.question}</span>
                  {openItems.includes(faq.id) ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="h-px bg-gray-600/50 mb-4"></div>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
