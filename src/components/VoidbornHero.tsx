import { Calendar } from "lucide-react";
import Image from "next/image";

export function VoidbornHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black/80 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-purple-900/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Voidborn Logo - with better spacing */}
        <div className="mb-8 relative">
          <div className="absolute -inset-32 bg-purple-500/20 rounded-full blur-3xl opacity-70"></div>
          <Image src="/images/voidborn.png" alt="Devomon Voidborn" width={384} height={384} className="mx-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-base text-gray-100 mb-6 leading-relaxed font-medium">&quot;What if the stars you worshipped were never gods – just puppeteers in a game you were never meant to win?&quot;</p>
          <p className="text-base text-gray-300 leading-relaxed">A dark fantasy webtoon about betrayal, revolution, and becoming the one thing the gods fear most.</p>
        </div>

        {/* Release Info - translated to English */}
        <div className="inline-flex items-center bg-black/80 backdrop-blur-md rounded-xl px-6 py-4 border border-purple-500/30 glow-accent mb-10">
          <Calendar className="w-6 h-6 text-purple-400 mr-3" />
          <span className="text-sm font-semibold text-purple-400">Release: Late 2025</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
