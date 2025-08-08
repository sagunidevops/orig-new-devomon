"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PreRegisterModal } from "./PreRegisterModal";
import Image from "next/image";
// Placeholder images - replace with actual assets
const brandLogo = "/images/devomon-main-logo.png";
const heroBackground = "/images/hero-background.png";

export function Hero() {
  const [isPreRegisterOpen, setIsPreRegisterOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      {/* Gaming-style grid overlay (more subtle) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-8 px-4 py-2" variant="secondary">
            New Gaming IP in Development
          </Badge>

          <div className="mb-6 flex justify-center">
            <Image src={brandLogo} alt="Devomon" width={320} height={320} className="drop-shadow-2xl" />
          </div>

          <p className="text-base text-gray-200 mb-12 leading-relaxed drop-shadow-lg">Dive into the world of Devomon - a unique gaming IP with immersive storytelling, captivating gameplay and a vibrant community.</p>

          <div className="flex flex-col items-center space-y-6">
            {/* PRE-REGISTER Button - Only button */}
            <Button size="lg" onClick={() => setIsPreRegisterOpen(true)} className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 border border-purple-400/30">
              PRE-REGISTER
            </Button>
          </div>
        </div>
      </div>

      {/* Gaming-style Floating Elements (more subtle over image) */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse glow-primary"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/8 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-purple-500/15 rounded-full blur-lg animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-pulse delay-300"></div>

      {/* Pre-Register Modal */}
      <PreRegisterModal isOpen={isPreRegisterOpen} onClose={() => setIsPreRegisterOpen(false)} />
    </section>
  );
}
