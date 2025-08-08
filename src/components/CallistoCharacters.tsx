'use client';

import { useState } from "react";
import { CharacterDisplay } from "./characters/CharacterDisplay";
import { CharacterSidebar } from "./characters/CharacterSidebar";
import { VideoModal } from "./characters/VideoModal";
import { playableCharacters } from "./characters/data";
import { PlayableCharacter } from "./characters/types";

export function CallistoCharacters() {
  const [selectedVideo, setSelectedVideo] = useState<PlayableCharacter | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedMainCharacter, setSelectedMainCharacter] = useState<PlayableCharacter>(playableCharacters[0]);

  const openVideo = (character: PlayableCharacter) => {
    setSelectedVideo(character);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Navigation functions for sidebar
  const itemsPerPage = 4; // Show 4 characters at a time
  const maxScrollPosition = Math.max(0, playableCharacters.length - itemsPerPage);

  const scrollUp = () => {
    setScrollPosition(prev => Math.max(0, prev - 1));
  };

  const scrollDown = () => {
    setScrollPosition(prev => Math.min(maxScrollPosition, prev + 1));
  };

  // Navigation functions for main character display
  const navigateToPrevious = () => {
    const currentIndex = playableCharacters.findIndex(char => char.id === selectedMainCharacter.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : playableCharacters.length - 1;
    setSelectedMainCharacter(playableCharacters[previousIndex]);
  };

  const navigateToNext = () => {
    const currentIndex = playableCharacters.findIndex(char => char.id === selectedMainCharacter.id);
    const nextIndex = currentIndex < playableCharacters.length - 1 ? currentIndex + 1 : 0;
    setSelectedMainCharacter(playableCharacters[nextIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            Playable Characters
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-3">
            Meet the heroes and Evomons of Callisto - each with unique powers and abilities
          </p>
          <p className="text-sm text-purple-400 font-medium">
            More than 25 characters are in development
          </p>
        </div>

        {/* Gaming-Style Character Selection */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Character Display */}
            <CharacterDisplay 
              character={selectedMainCharacter}
              onVideoOpen={openVideo}
              onNavigatePrevious={navigateToPrevious}
              onNavigateNext={navigateToNext}
            />
            
            {/* Character Selection Sidebar */}
            <CharacterSidebar
              characters={playableCharacters}
              selectedCharacter={selectedMainCharacter}
              scrollPosition={scrollPosition}
              onCharacterSelect={setSelectedMainCharacter}
              onVideoOpen={openVideo}
              onScrollUp={scrollUp}
              onScrollDown={scrollDown}
              maxScrollPosition={maxScrollPosition}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>

        {/* Video Modal */}
        <VideoModal
          character={selectedVideo}
          onClose={closeVideo}
        />
      </div>
    </section>
  );
}