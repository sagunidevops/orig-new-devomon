import { CallistoHero } from "../components/CallistoHero";
import { CallistoStory } from "../components/CallistoStory";
import { CallistoTrailer } from "../components/CallistoTrailer";
import { CallistoCharacters } from "../components/CallistoCharacters";
import { CallistoGameplay } from "../components/CallistoGameplay";
import { DevelopmentVlogs } from "../components/DevelopmentVlogs";
import { FadeInUp, FadeInLeft, FadeInRight } from "../components/ScrollAnimation";

export default function CallistoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Epic Void Portal Effect */}
      <section className="bg-void-hero void-particles">
        <CallistoHero />
      </section>
      
      {/* Story Section "Eine Welt im Schatten" - Deep Space with subtle effects */}
      <section className="bg-void-primary relative void-divider">
        <FadeInLeft>
          <CallistoStory />
        </FadeInLeft>
      </section>
      
      {/* Evomon Trailer - Erste Einblicke in die Welt - Nebula Effect */}
      <section className="bg-void-secondary bg-lightning-essence relative void-divider">
        <FadeInUp delay={100}>
          <CallistoTrailer />
        </FadeInUp>
      </section>
      
      {/* Characters Section - Void Energy with Fire Essence */}
      <section className="bg-void-accent bg-fire-essence relative void-divider">
        <FadeInRight delay={150}>
          <CallistoCharacters />
        </FadeInRight>
      </section>
      
      {/* Gameplay System - Black Hole Effect */}
      <section className="bg-void-dark relative void-divider">
        <FadeInUp delay={100}>
          <CallistoGameplay />
        </FadeInUp>
      </section>
      
      {/* Development Vlogs - Deep Space with Water Essence */}
      <section className="bg-void-primary bg-water-essence">
        <FadeInLeft delay={200}>
          <DevelopmentVlogs />
        </FadeInLeft>
      </section>
    </div>
  );
}