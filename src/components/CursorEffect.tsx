'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const particleIdRef = useRef(0);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      setIsMoving(true);
      
      // Check if hovering over interactive elements
      const target = e.target as Element;
      const isInteractive = target.closest('a, button, [role="button"], [data-cursor-hover]');
      setIsHovering(!!isInteractive);
      
      // Create new particles when moving
      if (Math.random() < 0.3) { // 30% chance per frame
        createParticle(newPos.x, newPos.y);
      }
      
      // Reset moving state after mouse stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
      setIsHovering(false);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  const createParticle = (x: number, y: number) => {
    const particle: Particle = {
      id: particleIdRef.current++,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      opacity: 1,
      size: Math.random() * 3 + 1,
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
      life: 0,
      maxLife: Math.random() * 60 + 30, // 30-90 frames
    };

    setParticles(prev => [...prev.slice(-20), particle]); // Keep max 20 particles
  };

  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life + 1,
            opacity: Math.max(0, 1 - (particle.life / particle.maxLife)),
          }))
          .filter(particle => particle.life < particle.maxLife)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Void Portal Core - Main rotating ring */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - (isHovering ? 30 : 25),
          top: mousePosition.y - (isHovering ? 30 : 25),
          transform: `scale(${isMoving ? 1.2 : 1}) ${isHovering ? 'scale(1.4)' : ''}`,
        }}
      >
        <div 
          className={`relative transition-all duration-300 ${
            isHovering ? 'w-16 h-16' : 'w-12 h-12'
          }`}
        >
          {/* Outer rotating ring */}
          <div 
            className={`absolute inset-0 border-2 rounded-full transition-all duration-300 ${
              isHovering 
                ? 'border-accent/60 animate-spin' 
                : 'border-primary/40'
            }`}
            style={{
              animationDuration: isHovering ? '2s' : '4s',
              borderStyle: 'dashed',
            }}
          />
          
          {/* Inner solid ring */}
          <div 
            className={`absolute inset-2 border rounded-full transition-all duration-300 ${
              isHovering 
                ? 'border-primary/80 bg-primary/10' 
                : 'border-primary/50 bg-primary/5'
            }`}
          />
          
          {/* Core void center */}
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
              isHovering 
                ? 'w-3 h-3 bg-accent/80' 
                : 'w-2 h-2 bg-primary/60'
            }`}
          />
        </div>
      </div>

      {/* Gaming Crosshair for Precision */}
      <div
        className="fixed pointer-events-none z-45 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          opacity: isMoving ? 0.6 : 0.3,
        }}
      >
        {/* Horizontal line */}
        <div className="absolute top-2 left-0 w-4 h-0.5 bg-primary/60">
          <div className="absolute left-1.5 top-0 w-1 h-0.5 bg-background" />
        </div>
        {/* Vertical line */}
        <div className="absolute top-0 left-2 w-0.5 h-4 bg-primary/60">
          <div className="absolute top-1.5 left-0 w-0.5 h-1 bg-background" />
        </div>
      </div>

      {/* HUD Scan Lines */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-40 transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
          }}
        >
          <div className="w-20 h-20 relative">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/50" />
            
            {/* Scanning line */}
            <div 
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              style={{
                top: '50%',
                animation: 'scanLine 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      )}

      {/* Void Energy Aura */}
      <div
        className="fixed pointer-events-none z-35 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          opacity: isMoving ? 0.3 : 0.1,
        }}
      >
        <div 
          className={`w-24 h-24 rounded-full blur-xl transition-all duration-500 ${
            isHovering 
              ? 'bg-gradient-to-r from-accent/20 to-transparent scale-125' 
              : 'bg-gradient-to-r from-primary/15 to-transparent'
          }`} 
        />
      </div>

      {/* Particle Trail System */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-primary/80 blur-sm"
            style={{
              boxShadow: `0 0 ${particle.size * 2}px rgba(139, 92, 246, ${particle.opacity * 0.5})`,
            }}
          />
        </div>
      ))}


    </>
  );
}