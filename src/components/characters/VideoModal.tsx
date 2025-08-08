import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import { PlayableCharacter } from "./types";
import { LazyYouTube } from "../LazyYouTube";

interface VideoModalProps {
  character: PlayableCharacter | null;
  onClose: () => void;
}

export function VideoModal({ character, onClose }: VideoModalProps) {
  if (!character) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute -top-12 right-0 text-white hover:text-purple-400 z-10"
        >
          <X className="w-6 h-6" />
        </Button>
        
        {/* Video Container with LazyYouTube */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-purple-400/30">
          {character.videoUrl ? (
            <LazyYouTube
              videoId={character.videoUrl}
              title={`${character.name} Character Preview`}
              autoplay={true}
              rel="0"
              modestbranding="1"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>No video available for {character.name}</p>
            </div>
          )}
        </div>
        
        {/* Character Info Below Video */}
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            {character.name}
          </h3>
          <div className="flex gap-2 justify-center">
            <Badge 
              className={`bg-${character.elementColor}/20 text-${character.elementColor} border-${character.elementColor}/40`}
            >
              {character.element} • {character.type}
            </Badge>
            {character.evolutionInfo && (
              <Badge variant="outline" className="text-gray-400 border-gray-600/40 bg-gray-600/10">
                {character.evolutionInfo}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}