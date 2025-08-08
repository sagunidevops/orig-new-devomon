import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar, Gamepad2, BookOpen } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

export function DevemonOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
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
        {/* Lore Section - Compact */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">
            The Devomon Universe
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-200 mb-4 leading-relaxed">
              In a world where mysterious creatures called <span className="text-primary font-semibold">Evomon</span> determine 
              the reality between light and shadow, heroes fight against an emerging darkness.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Devomon evolves into a multi-layered gaming IP that tells stories across multiple media.
            </p>
          </div>
        </div>

        {/* Project Cards - Compact and Horizontal */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Callisto Game Card - Compact */}
          <Card className="relative border-2 border-primary/30 bg-black/40 backdrop-blur-md hover:border-primary/60 transition-all duration-500 group hover:glow-primary overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-primary/20 text-primary border-primary/40 text-xs">
                  <Gamepad2 className="w-3 h-3 mr-1" />
                  Action-RPG
                </Badge>
                <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  2026
                </Badge>
              </div>
              
              {/* Logo and Content horizontal */}
              <div className="flex items-center gap-4">
                <Image 
                  src="/images/callisto.png" 
                  alt="Devomon Callisto" 
                  width={80}
                  height={80}
                  className="object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <CardDescription className="text-sm text-gray-300 mb-3 leading-relaxed">
                    Crossplay anime action-RPG with strategic team combat and tactical battles.
                  </CardDescription>
                  
                  {/* Compact Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">Team Combat</span>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">Crossplay</span>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">Story-driven</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 pt-0 pb-4">
              <Link href="/callisto" className="block">
                <Button className="w-full group-hover:scale-105 transition-transform glow-primary text-sm py-3">
                  Discover Game
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Voidborn Webtoon Card - Compact */}
          <Card className="relative border-2 border-purple-500/30 bg-black/40 backdrop-blur-md hover:border-purple-500/60 transition-all duration-500 group hover:glow-accent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50"></div>
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/40 text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Webtoon
                </Badge>
                <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  Late 2025
                </Badge>
              </div>
              
              {/* Logo and Content horizontal */}
              <div className="flex items-center gap-4">
                <Image 
                  src="/images/voidborn.png" 
                  alt="Devomon Voidborn" 
                  width={80}
                  height={80}
                  className="object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <CardDescription className="text-sm text-gray-300 mb-3 leading-relaxed">
                    Visual webtoon with dark storytelling, epic battles and character development.
                  </CardDescription>
                  
                  {/* Compact Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">Story-focused</span>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">Dark Action</span>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">International</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 pt-0 pb-4">
              <Link href="/voidborn" className="block">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:scale-105 transition-transform border-purple-500/50 hover:bg-purple-500/10 text-sm py-3"
                >
                  Discover Webtoon
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}