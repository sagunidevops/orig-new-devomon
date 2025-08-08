'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Only monitor in development and with minimal impact
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      
      // Track page load performance
      const trackPageLoad = () => {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            
            if (loadTime > 2000) {
              console.warn(`⚠️ Slow page load: ${loadTime.toFixed(0)}ms`);
            } else {
              console.log(`✅ Page load time: ${loadTime.toFixed(0)}ms`);
            }
          }
        });
      };
      
      // Track YouTube performance without blocking
      const monitorYouTube = () => {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resource = entry as PerformanceResourceTiming;
              
              if (resource.name.includes('youtube.com')) {
                const loadTime = resource.responseEnd - resource.requestStart;
                
                if (loadTime > 1500) {
                  console.warn(`⚠️ Slow YouTube resource: ${loadTime.toFixed(0)}ms`);
                } else {
                  console.log(`✅ YouTube resource: ${loadTime.toFixed(0)}ms`);
                }
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
        
        return () => observer.disconnect();
      };
      
      // Initialize monitoring
      trackPageLoad();
      const cleanupYouTube = monitorYouTube();
      
      return () => {
        cleanupYouTube();
      };
    }
  }, []);
  
  return null; // This component only monitors, doesn't render anything
}