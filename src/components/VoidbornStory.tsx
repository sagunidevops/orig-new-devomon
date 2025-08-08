import { Badge } from "./ui/badge";
import Image from "next/image";

export function VoidbornStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Story Content - Left Side */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-16">
                <div className="flex justify-start">
                  <Badge className="mb-6 text-sm tracking-wide" variant="secondary">
                    The Story
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold mb-8 leading-tight">
                  From Hero to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Voidborn</span>
                </h2>
                <p className="text-base text-gray-300 leading-relaxed">A tale of betrayal, divine manipulation, and the birth of something the gods never expected.</p>
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <p className="text-base text-gray-200 leading-relaxed">
                  <span className="text-purple-400 font-medium">Yuto was a hero once.</span> Fighting alongside his best friend Shiro, believing their struggle would end the kingdom&apos;s suffering. But the Constellations—worshipped as divine arbiters—had other plans.
                </p>
                <p className="text-base text-gray-300 leading-relaxed pl-8 border-l-2 border-purple-500/30">
                  When Yuto lost everything and discovered that Shiro had been dead for years—his body stolen by a demon-born Constellation— death became his only escape. But as death took him, he encountered something beyond the stars: <span className="text-purple-400 font-medium">The Void.</span>
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  Awakening in a child&apos;s body in the slums of Callisto, powerless but not broken, Yuto walks a darker path. Not toward revenge, but revolution. To defeat the gods, he must become a <span className="text-purple-400 font-medium">creature without fate—a Voidborn.</span>
                </p>
              </div>
            </div>

            {/* Webtoon Panel - Right Side */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

                <Image src="/images/voidborn-right.jpg" alt="Voidborn Webtoon Panel" width={600} height={600} className="relative z-10 object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-all duration-500 ease-out rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Genre Tags - Simple and Clean */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap gap-4 text-base font-medium">
            <span className="text-purple-400">Dark Fantasy</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-200">Action</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-200">Psychological Thriller</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-200">Drama</span>
          </div>
        </div>
      </div>
    </section>
  );
}
