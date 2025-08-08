'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function ScrollAnimation({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !triggerOnce) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }, delay);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, triggerOnce, hasAnimated]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(50px)';
      case 'down':
        return 'translateY(-50px)';
      case 'left':
        return 'translateX(50px)';
      case 'right':
        return 'translateX(-50px)';
      case 'fade':
        return 'translateY(20px)';
      default:
        return 'translateY(50px)';
    }
  };

  const getVisibleTransform = () => {
    return 'translateY(0) translateX(0)';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
        transitionDuration: `${duration}ms`,
        transitionProperty: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

// Specialized variants for common use cases
export function FadeInUp({ 
  children, 
  className = '', 
  delay = 0 
}: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="up" 
      className={className} 
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
}

export function FadeInLeft({ 
  children, 
  className = '', 
  delay = 0 
}: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="left" 
      className={className} 
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
}

export function FadeInRight({ 
  children, 
  className = '', 
  delay = 0 
}: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="right" 
      className={className} 
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
}

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0 
}: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="fade" 
      className={className} 
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
}

// Staggered animation for multiple elements
export function StaggeredAnimation({ 
  children, 
  className = '', 
  staggerDelay = 100 
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <>
      {children.map((child, index) => (
        <FadeInUp 
          key={index} 
          className={className} 
          delay={index * staggerDelay}
        >
          {child}
        </FadeInUp>
      ))}
    </>
  );
}