import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookOpen, Calendar, Star, Eye } from "lucide-react";
import Image from "next/image";

export function WebtoonSection() {
  return (
    <section id="webtoon" className="py-20 bg-gradient-to-br from-secondary/20 to-background relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/20 via-transparent to-accent/20"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4" variant="secondary">
              Digital Manga
            </Badge>
            <div className="mb-6">
              <Image src="/images/voidborn.png" alt="Devomon Voidborn" width={64} height={64} className="mb-4" />
              <h2 className="text-5xl font-bold">Webtoon</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">&quot;Voidborn&quot; - der offizielle Devomon Webtoon. Erlebe intensive Kampfszenen, düstere Atmosphäre und die Hintergrundgeschichte der Charaktere. Ein episches Prelude zum Spiel-Release mit atemberaubendem Artwork.</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Release</div>
                  <div className="text-sm text-muted-foreground">Ende 2025</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Format</div>
                  <div className="text-sm text-muted-foreground">Digital Webtoon</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Genre</div>
                  <div className="text-sm text-muted-foreground">Dark Fantasy</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Stil</div>
                  <div className="text-sm text-muted-foreground">Anime-Artwork</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Preview lesen</Button>
              <Button size="lg" variant="outline">
                Benachrichtigung aktivieren
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Mobile/Tablet-style Preview Frame */}
            <div className="relative bg-gradient-to-br from-purple-500/20 to-purple-700/10 rounded-2xl p-6 border border-purple-500/30 glow-accent backdrop-blur-sm">
              {/* Panel Preview - Mobile-style */}
              <div className="relative mx-auto max-w-xs bg-black/80 rounded-xl p-4 border border-purple-500/40 shadow-2xl">
                <div className="relative">
                  <Image src="/images/devomon-main-logo.png" alt="Devomon Voidborn Webtoon Panel" width={300} height={400} className="rounded-lg shadow-lg" />
                  {/* Preview badge */}
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">Preview</div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-white font-semibold text-sm">Kapitel 1</h4>
                  <p className="text-gray-400 text-xs">Der Kampf beginnt...</p>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-purple-300 text-sm">Erlebe die epische Geschichte auf deinem Device</p>
              </div>
            </div>

            {/* Gaming-style decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-600/40 rounded-full blur-md animate-pulse delay-500"></div>
            <div className="absolute top-1/4 -right-2 w-6 h-6 bg-purple-500/35 rounded-full blur-sm animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 -left-3 w-10 h-10 bg-purple-400/25 rounded-full blur-lg animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
