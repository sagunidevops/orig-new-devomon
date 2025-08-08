"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { PreRegisterModal } from "./PreRegisterModal";

export function CallistoHero() {
  const [isPreRegisterOpen, setIsPreRegisterOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/devomon-main-logo.png" alt="Devomon Callisto Background" fill className="object-cover" />
        {/* Light overlays to preserve artwork visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Callisto Logo - with better spacing */}
        <div className="mb-8 relative">
          <div className="absolute -inset-20 bg-cyan-400/20 rounded-full blur-3xl opacity-90"></div>
          <Image src="/images/callisto.png" alt="Devomon Callisto" width={432} height={432} className="h-[27rem] w-auto mx-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500" />
        </div>

        <p className="text-base text-white max-w-4xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">Tactical battles in a dark fantasy world. Intense real-time combat with fully controllable characters and strategic team combat at AAA level.</p>

        {/* Action Buttons - Only PRE-REGISTER */}
        <div className="flex flex-col items-center space-y-6">
          {/* PRE-REGISTER Button - Larger and more prominent */}
          <Button size="lg" onClick={() => setIsPreRegisterOpen(true)} className="text-lg px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 border border-cyan-400/30">
            PRE-REGISTER
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Pre-Register Modal */}
      <PreRegisterModal isOpen={isPreRegisterOpen} onClose={() => setIsPreRegisterOpen(false)} />
    </section>
  );
}
