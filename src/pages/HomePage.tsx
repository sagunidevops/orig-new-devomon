import { Hero } from "../components/Hero";
import { DevemonOverview } from "../components/DevemonOverview";
import { NewsSection } from "../components/NewsSection";
import { StudioSection } from "../components/StudioSection";
import { FadeInUp } from "../components/ScrollAnimation";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Epic Void Portal Effect */}
      <section className="bg-void-hero void-particles">
        <Hero />
      </section>
      
      {/* Devemon Overview - Deep Space */}
      <section className="bg-void-primary relative void-divider">
        <FadeInUp>
          <DevemonOverview />
        </FadeInUp>
      </section>
      
      {/* News Section - Black Hole Effect */}
      <section className="bg-void-dark relative void-divider">
        <FadeInUp delay={100}>
          <NewsSection />
        </FadeInUp>
      </section>
      
      {/* Studio Section - Nebula with Water Essence */}
      <section className="bg-void-secondary bg-water-essence relative void-divider">
        <FadeInUp delay={200}>
          <StudioSection />
        </FadeInUp>
      </section>
      

    </div>
  );
}