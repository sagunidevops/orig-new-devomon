import { ArrowLeft, Newspaper, Calendar, Bell, Rss } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Devomon News</h1>
              <p className="text-xl text-muted-foreground">Latest updates from the Devomon universe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Coming Soon Section */}
          <div className="bg-card rounded-lg border border-border p-12 mb-12">
            <div className="mb-8">
              <div className="p-6 bg-primary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Newspaper className="w-12 h-12 text-primary" />
              </div>

              <h2 className="text-3xl font-bold mb-4">News Hub Coming Soon</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We&apos;re building an exciting news center where you&apos;ll find the latest updates about Devomon: Callisto development, Devomon: Voidborn webtoon releases, community events, and exclusive behind-the-scenes content.</p>
            </div>

            {/* What to Expect */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-muted/20 rounded-lg">
                <Calendar className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Development Updates</h3>
                <p className="text-sm text-muted-foreground">Regular progress reports on Callisto game development and Voidborn webtoon episodes</p>
              </div>

              <div className="p-6 bg-muted/20 rounded-lg">
                <Bell className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Release Announcements</h3>
                <p className="text-sm text-muted-foreground">Be the first to know about beta releases, webtoon drops, and major milestones</p>
              </div>

              <div className="p-6 bg-muted/20 rounded-lg">
                <Rss className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Community Highlights</h3>
                <p className="text-sm text-muted-foreground">Featured community content, fan art showcases, and developer insights</p>
              </div>
            </div>

            {/* Newsletter Signup Placeholder */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="font-semibold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">Want to be notified when our news section goes live? Follow us on social media for the latest updates.</p>

              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild variant="outline" size="sm">
                  <a href="https://x.com/OfficialDevomon" target="_blank" rel="noopener noreferrer">
                    Follow on X
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://discord.gg/ar7Ax79J" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.youtube.com/@devomon" target="_blank" rel="noopener noreferrer">
                    Subscribe on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Current Information Sources */}
          <div className="bg-muted/10 rounded-lg p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Meanwhile, Follow Our Progress</h3>
            <p className="text-muted-foreground mb-6">While we prepare our dedicated news hub, you can stay updated through our active social channels and development vlogs.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://x.com/OfficialDevomon" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-bold text-primary">X</span>
                  </div>
                  <p className="text-sm font-medium">Daily Updates</p>
                </div>
              </a>

              <a href="https://www.youtube.com/@devomon" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <span className="text-sm font-bold text-red-400">YT</span>
                  </div>
                  <p className="text-sm font-medium">Dev Vlogs</p>
                </div>
              </a>

              <a href="https://discord.gg/ar7Ax79J" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <div className="text-center">
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <span className="text-sm font-bold text-indigo-400">DC</span>
                  </div>
                  <p className="text-sm font-medium">Community</p>
                </div>
              </a>

              <a href="https://www.twitch.tv/devomonofficial" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <span className="text-sm font-bold text-purple-400">TV</span>
                  </div>
                  <p className="text-sm font-medium">Live Streams</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
