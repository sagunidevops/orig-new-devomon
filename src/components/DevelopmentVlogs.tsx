'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Play, X, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LazyYouTube } from "./LazyYouTube";

interface VlogEntry {
  id: string;
  title: string;
  month: string;
  year: string;
  videoId?: string; // YouTube video ID
  thumbnail: string;
  description: string;
  duration?: string;
  isAvailable: boolean;
}

export function DevelopmentVlogs() {
  const [selectedVlog, setSelectedVlog] = useState<VlogEntry | null>(null);

  const vlogs: VlogEntry[] = [
    {
      id: "juni-2025",
      title: "Development Vlog #1",
      month: "June",
      year: "2025",
      videoId: "e2x-qS3ABr4",
      thumbnail: "https://img.youtube.com/vi/e2x-qS3ABr4/maxresdefault.jpg",
      description: "",
      duration: "12:34",
      isAvailable: true
    },
    {
      id: "juli-2025",
      title: "Development Vlog #2",
      month: "July", 
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=338&fit=crop",
      description: "",
      isAvailable: false
    },
    {
      id: "august-2025",
      title: "Development Vlog #3",
      month: "August",
      year: "2025", 
      thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=338&fit=crop",
      description: "",
      isAvailable: false
    },
    {
      id: "september-2025",
      title: "Development Vlog #4",
      month: "September",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=338&fit=crop", 
      description: "",
      isAvailable: false
    }
  ];

  const openVlog = (vlog: VlogEntry) => {
    if (vlog.isAvailable) {
      setSelectedVlog(vlog);
    }
  };

  const closeVlog = () => {
    setSelectedVlog(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Development Vlogs
          </h2>
        </div>

        {/* Vlogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vlogs.map((vlog) => (
            <Card 
              key={vlog.id} 
              className={`bg-black/60 backdrop-blur-sm border border-gray-800 overflow-hidden transition-all duration-300 ${
                vlog.isAvailable 
                  ? 'hover:border-cyan-400/50 cursor-pointer group' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => openVlog(vlog)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    vlog.isAvailable ? 'group-hover:scale-105' : ''
                  }`}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${
                  vlog.isAvailable 
                    ? 'bg-black/20 group-hover:bg-black/40' 
                    : 'bg-black/60'
                } transition-all duration-200 flex items-center justify-center`}>
                  
                  {vlog.isAvailable ? (
                    <>
                      {/* Play Button */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="bg-cyan-400/20 hover:bg-cyan-400/40 border-2 border-cyan-400 text-cyan-400 rounded-full w-16 h-16 flex items-center justify-center">
                          <Play className="w-6 h-6 ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      {vlog.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                          {vlog.duration}
                        </div>
                      )}
                    </>
                  ) : (
                    /* Coming Soon Overlay */
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-400 font-medium">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Vlog Info */}
              <div className="p-3">
                <h3 className="text-xl font-bold text-white mb-1">{vlog.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{vlog.month} {vlog.year}</span>
                </div>
                
                {!vlog.isAvailable && (
                  <Badge variant="outline" className="mt-2 text-gray-500 border-gray-600/40">
                    In Development
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Development Schedule Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Monthly Updates</h3>
            <p className="text-gray-300">
              Every month we share new insights into our development process. 
              Stay tuned for exclusive behind-the-scenes content and early access to new features!
            </p>
          </div>
        </div>

        {/* Video Modal with LazyYouTube */}
        {selectedVlog && selectedVlog.videoId && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <Button
                onClick={closeVlog}
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 z-10"
              >
                <X className="w-6 h-6" />
              </Button>
              
              {/* Video Container with LazyYouTube */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-cyan-400/30">
                <LazyYouTube
                  videoId={selectedVlog.videoId}
                  title={selectedVlog.title}
                  autoplay={true}
                  rel="0"
                  modestbranding="1"
                />
              </div>
              
              {/* Vlog Info Below Video */}
              <div className="mt-4 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedVlog.title}
                </h3>
                <div className="flex gap-2 justify-center items-center text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedVlog.month} {selectedVlog.year}</span>
                  {selectedVlog.duration && (
                    <>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{selectedVlog.duration}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}