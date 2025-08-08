interface YouTubeLogoProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function YouTubeLogo({ onClick, size = 'sm' }: YouTubeLogoProps) {
  const dimensions = {
    sm: { width: 22, height: 16 },
    md: { width: 32, height: 22 },
    lg: { width: 44, height: 32 }
  };

  const { width, height } = dimensions[size];
  const viewBoxHeight = (height / width) * 24;

  return (
    <div 
      className="cursor-pointer hover:scale-110 transition-all duration-200 hover:brightness-110 flex items-center justify-center"
      onClick={onClick}
      title="Watch Video"
    >
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 24 ${viewBoxHeight}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* YouTube Logo Background with rounded corners */}
        <rect x="0" y="0" width="24" height={viewBoxHeight} rx="2.5" fill="#FF0000"/>
        
        {/* Subtle gradient overlay for depth */}
        <defs>
          <linearGradient id={`youtubeGradient-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="24" height={viewBoxHeight} rx="2.5" fill={`url(#youtubeGradient-${size})`}/>
        
        {/* YouTube Play Button - properly centered and scaled */}
        <path 
          d={`M${9} ${viewBoxHeight * 0.35}L${15.5} ${viewBoxHeight * 0.5}L${9} ${viewBoxHeight * 0.65}V${viewBoxHeight * 0.35}Z`} 
          fill="white"
        />
      </svg>
    </div>
  );
}