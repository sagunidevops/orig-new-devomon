import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PlayableCharacter } from "./types";

interface CharacterDisplayProps {
  character: PlayableCharacter;
  onVideoOpen: (character: PlayableCharacter) => void;
  onNavigatePrevious: () => void;
  onNavigateNext: () => void;
}

export function CharacterDisplay({ character, onVideoOpen, onNavigatePrevious, onNavigateNext }: CharacterDisplayProps) {
  return (
    <div className="flex-1 relative">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        {/* Selected Character Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60">
          <ImageWithFallback
            src={character.image}
            alt={character.name}
            width={800}
            height={600}
            quality={95}
            priority
            className={`${
              character.type === 'Evomon'
                ? 'absolute bottom-5 right-5 w-auto h-[70%] object-contain'
                : `w-full h-full object-contain ${
                    // Uruda - right side positioning
                    character.id === 'uruda'
                      ? 'object-right'
                      // Yuto - custom horizontal positioning  
                      : character.id === 'yuto'
                      ? 'object-[85%_center]'
                      // Aerdyn - right side positioning
                      : character.id === 'aerdyn'
                      ? 'object-right'
                      // Nonomi - right side positioning
                      : character.id === 'nonomi'
                      ? 'object-right'
                      : 'object-center'
                  }`
            }`}
          />
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <Button
            onClick={onNavigatePrevious}
            variant="ghost"
            size="lg"
            className="bg-black/40 hover:bg-black/60 border-2 border-purple-400/60 text-purple-400 backdrop-blur-sm w-12 h-12 p-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Button
            onClick={onNavigateNext}
            variant="ghost"
            size="lg"
            className="bg-black/40 hover:bg-black/60 border-2 border-purple-400/60 text-purple-400 backdrop-blur-sm w-12 h-12 p-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Video Play Button - if character has video */}
        {character.videoUrl && (
          <div className="absolute top-6 right-6">
            <Button
              onClick={() => onVideoOpen(character)}
              size="lg"
              className="bg-purple-400/20 hover:bg-purple-400/40 border-2 border-purple-400 text-purple-400 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>
        )}
        
        {/* Character Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {/* Element Icon - No background box */}
                <div className="p-2">
                  {character.elementIcon}
                </div>
                <Badge className={`${
                  character.element === 'Lightning' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/40' :
                  character.element === 'Fire' ? 'bg-red-400/20 text-red-400 border-red-400/40' :
                  character.element === 'Wind' ? 'bg-green-300/20 text-green-300 border-green-300/40' :
                  character.element === 'Ice' ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/40' :
                  character.element === 'Plant' ? 'bg-green-600/20 text-green-600 border-green-600/40' :
                  'bg-gray-400/20 text-gray-400 border-gray-400/40'
                } text-sm`}>
                  {character.element} Element
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`${
                    character.type === 'Human' 
                      ? 'text-purple-400 border-purple-400/40 bg-purple-400/10' 
                      : 'text-cyan-400 border-cyan-400/40 bg-cyan-400/10'
                  } text-sm`}
                >
                  {character.type}
                </Badge>
                {character.evolutionInfo && (
                  <Badge variant="outline" className="text-gray-400 border-gray-600/40 bg-gray-600/10 text-sm">
                    {character.evolutionInfo}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-4">
                {character.name}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-2xl">
                {character.description}
              </p>
              
              {character.personality && (
                <div className="border-l-4 border-purple-400/50 pl-4">
                  <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {character.personality}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Elemental Effect Overlay */}
        <div className={`absolute inset-0 pointer-events-none ${
          character.element === 'Elektro' || character.element === 'Lightning' ? 'bg-lightning-essence' :
          character.element === 'Feuer' || character.element === 'Fire' ? 'bg-fire-essence' :
          character.element === 'Wind' ? 'bg-wind-essence' :
          character.element === 'Ice' ? 'bg-ice-essence' :
          ''
        } opacity-30`}></div>
      </div>
    </div>
  );
}