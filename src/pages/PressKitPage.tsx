import { ArrowLeft, Download, Image, FileText, Video, Users } from 'lucide-react';
import Link from 'next/link';

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-void-primary pt-20">
      {/* Header with Back Navigation */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Press Kit Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Press Kit</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download official assets, logos, and information about the Devomon universe for media coverage and press purposes.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-card rounded-lg p-8 mb-8 border border-border/50">
            <h2 className="text-2xl font-semibold mb-6">About Devomon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <p className="text-muted-foreground mb-4">
                  SAGUNI Studios - Independent game development studio focused on creating immersive fantasy experiences.
                </p>
                
                <h3 className="font-semibold mb-3">The Devomon Universe</h3>
                <p className="text-muted-foreground">
                  A comprehensive fantasy IP featuring an action RPG game (Callisto) and webtoon series (Voidborn), 
                  set in a world where strategy meets adventure.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Release Timeline</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Devomon: Voidborn Webtoon - Late 2025</li>
                  <li>• Devomon: Callisto Action RPG - 2026</li>
                </ul>
                
                <h3 className="font-semibold mb-3 mt-6">Platforms</h3>
                <p className="text-muted-foreground">
                  PC, PlayStation 5, Xbox Series X/S, Nintendo Switch
                </p>
              </div>
            </div>
          </div>

          {/* Assets Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Logos & Branding */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Image className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Logos & Branding</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Official Devomon logos, wordmarks, and brand guidelines in various formats.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Logos
              </button>
            </div>

            {/* Screenshots */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Image className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Screenshots</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                High-resolution gameplay screenshots from Callisto and artwork from Voidborn.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Screenshots
              </button>
            </div>

            {/* Trailers & Videos */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Video className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Trailers & Videos</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Official trailers, gameplay videos, and developer interviews.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Videos
              </button>
            </div>

            {/* Press Releases */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Press Releases</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Official announcements, development updates, and milestone news.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Press Kit
              </button>
            </div>

            {/* Character Assets */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Character Assets</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Official character artwork, portraits, and concept art from both properties.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Characters
              </button>
            </div>

            {/* Complete Press Kit */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Complete Package</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Download everything in one convenient package including all assets and documentation.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download All Assets
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
            <h3 className="font-semibold mb-4">Media Contact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">For press inquiries and interview requests:</p>
                <p className="font-medium">press@devomon.io</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">For partnership and business inquiries:</p>
                <p className="font-medium">business@devomon.io</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-sm text-muted-foreground">
                <strong>Usage Guidelines:</strong> All assets provided in this press kit are intended for editorial use in coverage of Devomon. 
                Commercial use requires prior written permission. Please credit SAGUNI Studios when using these materials.
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}