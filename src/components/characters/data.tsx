"use client";

import { Zap, Flame, Wind, Leaf, Snowflake } from "lucide-react";
import { PlayableCharacter } from "./types";

export const playableCharacters: PlayableCharacter[] = [
  // 1. Yuto (Human - Lightning)
  {
    id: "yuto",
    name: "Yuto",
    type: "Human",
    element: "Lightning",
    description: "A young adventurer with a special connection to electrical energy.",
    personality: "Brave, determined and with a strong sense of justice. Yuto is a natural leader who inspires his allies.",
    image: "/images/yuto.png",
    elementIcon: <Zap className="w-5 h-5 text-yellow-400" />,
    elementColor: "yellow-400",
  },
  // 2. Flokimon (Evomon - Fire)
  {
    id: "flokimon",
    name: "Flokimon",
    type: "Evomon",
    element: "Fire",
    role: "Fire",
    description: "Rare, intelligent Evomon with human culture. Fearless, sarcastic and loyal - the perfect adventurer companion.",
    evolutionInfo: "3 Evolutions",
    image: "/images/flokimon.png",
    elementIcon: <Flame className="w-5 h-5 text-red-400" />,
    elementColor: "red-400",
    videoUrl: "EzSDSQ-y6KU", // Flokimon showcase video
    videoThumbnail: "https://img.youtube.com/vi/EzSDSQ-y6KU/maxresdefault.jpg",
  },
  // 3. Nonomi (Human - Ice)
  {
    id: "nonomi",
    name: "Nonomi",
    type: "Human",
    element: "Ice",
    description: "A mysterious sorceress with a deep bond to the power of ice and memories long forgotten.",
    personality: "Graceful, composed, and fiercely intelligent. Nonomi uses her mastery over frost to protect those she cares about, freezing time itself when danger approaches. A quiet force whose presence brings both calm and awe.",
    image: "/images/nonomi.png",
    elementIcon: <Snowflake className="w-5 h-5 text-cyan-400" />,
    elementColor: "cyan-400",
    videoUrl: "CASOcGTEUeQ", // Nonomi showcase video
    videoThumbnail: "https://img.youtube.com/vi/CASOcGTEUeQ/maxresdefault.jpg",
  },
  // 4. Verdomon (Evomon - Wind)
  {
    id: "verdomon",
    name: "Verdomon",
    type: "Evomon",
    element: "Wind",
    role: "Wind",
    description: "Social and intelligent bird Evomon. Explosive and loud when provoked, fights in groups with wind attacks and aerodynamic maneuvers.",
    evolutionInfo: "3 Evolutions",
    image: "/images/verdomon.png",
    elementIcon: <Wind className="w-5 h-5 text-green-300" />,
    elementColor: "green-300",
    videoUrl: "ApSQ8qJ_-1s", // Updated Verdomon showcase video
    videoThumbnail: "https://img.youtube.com/vi/ApSQ8qJ_-1s/maxresdefault.jpg",
  },
  // 5. Andramon (Evomon - Lightning)
  {
    id: "andramon",
    name: "Andramon",
    type: "Evomon",
    element: "Lightning",
    role: "Lightning",
    description: "Aggressive hunter with sharp claws and lightning attacks. Territorial and fearless, but extremely loyal once bonded.",
    evolutionInfo: "2+ Evolutions",
    image: "/images/andramon.png",
    elementIcon: <Zap className="w-5 h-5 text-yellow-400" />,
    elementColor: "yellow-400",
    videoUrl: "G-oCcxDHi78", // Andramon showcase video
    videoThumbnail: "https://img.youtube.com/vi/G-oCcxDHi78/maxresdefault.jpg",
  },
  // 6. Brocemon (Evomon - Ice)
  {
    id: "brocemon",
    name: "Brocemon",
    type: "Evomon",
    element: "Ice",
    role: "Ice",
    description: "Relaxed loner from cold regions. Appears lazy, but explodes in short, intense combat moments with ice powers.",
    evolutionInfo: "3+ Evolutions",
    image: "/images/brocemon.png",
    elementIcon: <Snowflake className="w-5 h-5 text-cyan-400" />,
    elementColor: "cyan-400",
    videoUrl: "Pe9862ztr-E", // Brocemon showcase video
    videoThumbnail: "https://img.youtube.com/vi/Pe9862ztr-E/maxresdefault.jpg",
  },
  // Remaining Characters
  {
    id: "uruda",
    name: "Uruda",
    type: "Human",
    element: "Fire",
    description: "A former soldier with fiery powers, shaped by loss and grief.",
    personality: "Deeply introspective and extremely loyal. Her calm nature hides blazing passion and unwavering determination.",
    image: "/images/urada.png",
    elementIcon: <Flame className="w-5 h-5 text-red-400" />,
    elementColor: "red-400",
  },
  {
    id: "aerdyn",
    name: "Aerdyn",
    type: "Human",
    element: "Wind",
    description: "A healer and fighter with wind powers who combines gentleness with precise martial arts.",
    personality: "Calm, compassionate and very observant. Balances the heart of a healer with the determination of a warrior.",
    image: "/images/aerdyn.png",
    elementIcon: <Wind className="w-5 h-5 text-green-300" />,
    elementColor: "green-300",
  },
  {
    id: "leafomon",
    name: "Leafomon",
    type: "Evomon",
    element: "Plant",
    role: "Plant",
    description: "Quiet plant hunter with nature connection. Ambush tactician who fights with strategically placed seeds and vegetation.",
    evolutionInfo: "2+ Evolutions",
    image: "/images/leafomon.png",
    elementIcon: <Leaf className="w-5 h-5 text-green-600" />,
    elementColor: "green-600",
    videoUrl: "EY1VLpJze-w", // Leafomon showcase video
    videoThumbnail: "https://img.youtube.com/vi/EY1VLpJze-w/maxresdefault.jpg",
  },
];
