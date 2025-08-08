import { Button } from "../ui/button";
import { ChevronUp, ChevronDown, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { YouTubeLogo } from "./YouTubeLogo";
import { PlayableCharacter } from "./types";

interface CharacterSidebarProps {
  characters: PlayableCharacter[];
  selectedCharacter: PlayableCharacter;
  scrollPosition: number;
  onCharacterSelect: (character: PlayableCharacter) => void;
  onVideoOpen: (character: PlayableCharacter) => void;
  onScrollUp: () => void;
  onScrollDown: () => void;
  maxScrollPosition: number;
  itemsPerPage: number;
}

export function CharacterSidebar({
  characters,
  selectedCharacter,
  scrollPosition,
  onCharacterSelect,
  onVideoOpen,
  onScrollUp,
  onScrollDown,
  maxScrollPosition,
  itemsPerPage
}: CharacterSidebarProps) {
  const visibleCharacters = characters.slice(scrollPosition, scrollPosition + itemsPerPage);
  const hasMoreBelow = scrollPosition < maxScrollPosition;

  return (
    <div className="lg:w-96">
      <div className="relative">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-lg font-bold text-purple-400">Characters</h3>
          <div className="flex items-center gap-2">
            {/* Character Counter */}
            <p className="text-xs text-gray-500 mr-3">
              {scrollPosition + 1}-{Math.min(scrollPosition + itemsPerPage, characters.length)} of {characters.length}
            </p>
            
            {/* Navigation Controls */}
            <Button
              onClick={onScrollUp}
              disabled={scrollPosition === 0}
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 border border-gray-600/40 rounded-md ${
                scrollPosition === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-purple-400/20 hover:border-purple-400/60 hover:text-purple-400'
              }`}
            >
              <ChevronUp className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={onScrollDown}
              disabled={scrollPosition >= maxScrollPosition}
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 border border-gray-600/40 rounded-md ${
                scrollPosition >= maxScrollPosition 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-purple-400/20 hover:border-purple-400/60 hover:text-purple-400'
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Character List */}
        <div className="space-y-3">
          {visibleCharacters.map((character) => (
            <div
              key={character.id}
              onClick={() => onCharacterSelect(character)}
              className={`relative group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                selectedCharacter.id === character.id 
                  ? 'transform scale-[1.02] shadow-lg shadow-purple-500/20' 
                  : 'hover:transform hover:scale-[1.01] hover:shadow-md hover:shadow-purple-500/10'
              }`}
            >
              {/* Background Card */}
              <div className={`relative p-4 border rounded-xl transition-all duration-300 ${
                selectedCharacter.id === character.id 
                  ? 'bg-purple-400/15 border-purple-400/50 shadow-inner' 
                  : 'bg-gray-800/30 border-gray-600/40 group-hover:bg-purple-400/10 group-hover:border-purple-400/30'
              }`}>
                <div className="flex items-center gap-4">
                  {/* Character Portrait */}
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-black/20">
                    <ImageWithFallback
                      src={character.image}
                      alt={character.name}
                      className={`${
                        character.type === 'Evomon'
                          ? 'absolute bottom-[2px] right-[2px] w-auto h-[75%] object-contain'
                          : `w-full h-full object-cover ${
                              // Human Characters - head/shoulders focus
                              character.id === 'uruda' || character.id === 'aerdyn' || character.id === 'yuto' || character.id === 'nonomi'
                                ? 'object-top object-center'
                                : 'object-center'
                            }`
                      }`}
                    />
                    
                    {/* Selection Indicator */}
                    {selectedCharacter.id === character.id && (
                      <div className="absolute inset-0 border-2 border-purple-400 rounded-lg"></div>
                    )}
                    
                    {/* Small YouTube Video Indicator (keep original) */}
                    {character.videoUrl && (
                      <div 
                        className="absolute top-1 left-1 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          onVideoOpen(character);
                        }}
                      >
                        <YouTubeLogo 
                          onClick={() => onVideoOpen(character)}
                          size="sm"
                        />
                      </div>
                    )}
                    
                    {/* Element Icon */}
                    <div className="absolute bottom-1 right-1 p-1">
                      <div className="w-4 h-4 opacity-90">
                        {character.elementIcon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Character Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-base font-bold transition-colors truncate ${
                      selectedCharacter.id === character.id 
                        ? 'text-purple-300' 
                        : 'text-white group-hover:text-purple-200'
                    }`}>
                      {character.name}
                    </h4>
                    
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <span className={`text-xs font-medium ${
                        selectedCharacter.id === character.id 
                          ? `${
                              character.element === 'Lightning' ? 'text-yellow-400' :
                              character.element === 'Fire' ? 'text-red-400' :
                              character.element === 'Wind' ? 'text-green-300' :
                              character.element === 'Ice' ? 'text-cyan-400' :
                              character.element === 'Plant' ? 'text-green-600' :
                              'text-gray-400'
                            }` 
                          : 'text-gray-400 group-hover:text-gray-300'
                      }`}>
                        {character.element}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className={`text-xs ${
                        selectedCharacter.id === character.id 
                          ? (character.type === 'Human' ? 'text-purple-300' : 'text-cyan-300')
                          : 'text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {character.type}
                      </span>
                    </div>
                    
                    {/* Evolution Info for Evomon */}
                    {character.evolutionInfo && (
                      <div className="text-xs text-gray-500 group-hover:text-gray-400">
                        {character.evolutionInfo}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Side Icons */}
                  <div className="flex flex-col items-end gap-2">
                    {/* Large YouTube Icon - if character has video */}
                    {character.videoUrl && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          onVideoOpen(character);
                        }}
                        variant="ghost"
                        size="sm"
                        className={`w-10 h-8 p-0 border transition-all duration-300 ${
                          selectedCharacter.id === character.id
                            ? 'border-red-500/60 bg-red-500/20 hover:bg-red-500/30 text-red-400'
                            : 'border-red-400/40 bg-red-400/10 hover:bg-red-400/20 hover:border-red-400/60 text-red-300 group-hover:text-red-400'
                        }`}
                        title={`Watch ${character.name} Video`}
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                    
                    {/* Selection Indicator Arrow */}
                    <div className={`transition-all duration-300 ${
                      selectedCharacter.id === character.id 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                    }`}>
                      <div className="w-2 h-2 bg-purple-400 transform rotate-45 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Background Glow */}
              {selectedCharacter.id === character.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/5 to-transparent rounded-xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* More Characters Indicator - Simple Down Arrow */}
        {hasMoreBelow && (
          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center gap-1">
              <ChevronDown className="w-4 h-4 text-purple-400 animate-bounce" />
              <p className="text-xs text-gray-500">More characters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}