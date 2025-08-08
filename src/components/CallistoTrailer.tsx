import { Card } from "./ui/card";
import { LazyYouTube } from "./LazyYouTube";

export function CallistoTrailer() {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">First Glimpse into Callisto</h3>
          <p className="text-gray-300">Experience the dark world of Devomon in action</p>
        </div>
        
        <Card className="bg-black/60 backdrop-blur-sm border border-primary/30 overflow-hidden max-w-4xl mx-auto">
          <div className="p-2">
            <LazyYouTube
              videoId="9CfxUaAxvHk"
              title="Devomon Callisto Trailer - First Glimpse into the Action-RPG"
              rel="0"
              modestbranding="1"
              className="rounded-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}