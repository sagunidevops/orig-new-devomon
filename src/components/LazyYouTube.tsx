'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Youtube } from 'lucide-react';
import Image from "next/image";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  start?: number;
  rel?: '0' | '1';
  modestbranding?: '0' | '1';
}

export function LazyYouTube({
  videoId,
  title,
  className = '',
  autoplay = false,
  start,
  rel = '0',
  modestbranding = '1'
}: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Build YouTube URL
  const buildYouTubeUrl = () => {
    const params = new URLSearchParams({
      rel,
      modestbranding,
      enablejsapi: '1',
      origin: window.location.origin
    });
    
    if (autoplay) params.set('autoplay', '1');
    if (start) params.set('start', start.toString());
    
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };
  
  const handlePlayClick = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full bg-gray-900 rounded-lg overflow-hidden ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {!isLoaded ? (
        // Thumbnail with play button
        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
          
          {/* Loading state */}
          {isVisible && !thumbnailLoaded && (
            <div className="absolute inset-0 bg-void-primary flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* YouTube Thumbnail */}
          {isVisible && (
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              onLoad={() => setThumbnailLoaded(true)}
              className={`object-cover transition-opacity duration-300 ${
                thumbnailLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* YouTube Logo */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center gap-1">
            <Youtube className="w-3 h-3 text-red-500" />
            <span className="text-white text-xs">YouTube</span>
          </div>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm font-medium line-clamp-2">{title}</p>
            <p className="text-gray-300 text-xs mt-1">Click to play</p>
          </div>
        </div>
      ) : (
        // Actual YouTube embed (only loads when clicked)
        <iframe
          src={buildYouTubeUrl()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
          loading="lazy"
        />
      )}
    </div>
  );
}