import { ReactNode } from "react";

export interface PlayableCharacter {
  id: string;
  name: string;
  type: "Human" | "Evomon";
  element: string;
  description: string;
  personality?: string; // Only for humans
  role?: string; // Only for evomons
  evolutionInfo?: string; // Only for evomons
  image: string;
  elementIcon: ReactNode;
  elementColor: string;
  videoUrl?: string; // YouTube video ID
  videoThumbnail?: string; // Custom thumbnail for video
}