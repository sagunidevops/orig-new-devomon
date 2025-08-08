'use client';

import React, { useState } from 'react'
import Image from "next/image"

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  quality?: number;
  priority?: boolean;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, width, height, quality, priority, ...rest } = props
  
  // Convert string dimensions to numbers for Next.js Image component
  const imageWidth = typeof width === 'string' ? parseInt(width) : width || 100;
  const imageHeight = typeof height === 'string' ? parseInt(height) : height || 100;

  // Convert Blob to URL if needed
  const imageSrc = src instanceof Blob ? URL.createObjectURL(src) : src;

  // If no src provided or error occurred, show fallback
  if (!imageSrc || didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image src={ERROR_IMG_SRC} alt="Error loading image" width={88} height={88} {...rest} data-original-url={typeof src === 'string' ? src : 'blob'} />
        </div>
      </div>
    );
  }

  return (
    <Image 
      src={imageSrc} 
      alt={alt || ''} 
      width={imageWidth} 
      height={imageHeight} 
      quality={quality || 75}
      priority={priority || false}
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError} 
    />
  )
}
