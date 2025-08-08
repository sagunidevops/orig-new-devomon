import { ArrowLeft, Check, Users, Mail, Clock, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CareersSuccessPage() {
  return (
    <div className="min-h-screen bg-void-dark">
      {/* Header with minimal navigation */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="relative p-8 bg-void-primary border-2 border-accent/30 rounded-lg shadow-2xl shadow-accent/20 overflow-hidden">
            {/* Header with Devomon Logo */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <Image src="/images/devomon-main-logo.png" alt="Devomon" width={64} height={64} className="drop-shadow-2xl" />
              </div>

              {/* Success Title with Gaming Effect */}
              <div className="relative mb-6">
                <h2 className="text-4xl font-bold text-green-400 mb-2 tracking-wider">BEWERBUNG</h2>
                <h3 className="text-5xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">EINGEGANGEN</h3>

                {/* Angular divider */}
                <div className="flex items-center justify-center my-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-32"></div>
                  <div className="mx-4 w-2 h-2 bg-green-400 rotate-45"></div>
                  <div className="h-px bg-gradient-to-r from-green-400 via-green-400 to-transparent w-32"></div>
                </div>
              </div>
            </div>

            {/* Success Icon with Gaming Aesthetic */}
            <div className="relative mx-auto mb-8 w-32 h-32 flex items-center justify-center">
              {/* Hexagonal background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-500/30 transform rotate-0" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
              <div className="absolute inset-2 bg-gradient-to-br from-green-400/60 to-emerald-500/60 transform rotate-0" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
              <div className="relative z-10 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                <Check className="w-8 h-8 text-white" />
              </div>

              {/* Animated particles */}
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-0"></div>
              <div className="absolute top-4 right-0 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-4 left-0 w-1 h-1 bg-green-400 rounded-full animate-ping delay-600"></div>
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-900"></div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">WIR WERDEN UNS BEI DIR MELDEN</h4>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                Deine Bewerbung ist erfolgreich bei unserem <span className="text-green-400 font-semibold">Devomon HR Team</span> eingegangen. Wir prüfen alle Unterlagen sorgfältig und melden uns innerhalb von 5-7 Werktagen.
              </p>
            </div>

            {/* HR Process Stats Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card/50 border border-green-400/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-bold">ERHALTEN</div>
                <div className="text-xs text-gray-400">Sofort</div>
              </div>
              <div className="text-center p-4 bg-card/50 border border-emerald-400/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-bold">PRÜFUNG</div>
                <div className="text-xs text-gray-400">HR Team</div>
              </div>
              <div className="text-center p-4 bg-card/50 border border-green-400/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-bold">ANTWORT</div>
                <div className="text-xs text-gray-400">5-7 Tage</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold tracking-wider border-2 border-green-400 hover:from-emerald-500 hover:to-green-500 hover:scale-105 transition-all duration-300 rounded-none">
                <Home className="w-5 h-5" />
                ZURÜCK ZUR HOMEPAGE
              </Link>

              <Link href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card/50 text-white font-bold tracking-wider border-2 border-primary/30 hover:border-primary hover:bg-card/70 transition-all duration-300 rounded-none">
                <Users className="w-5 h-5" />
                WEITERE STELLEN
              </Link>
            </div>

            {/* Gaming-style Footer */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 text-green-400 font-bold tracking-wider">
                <Users className="w-5 h-5 mr-2" />
                BEWERBUNG ERFOLGREICH ÜBERMITTELT
              </div>
            </div>

            {/* Background Gaming Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 border border-green-400/10 transform rotate-45 animate-pulse"></div>
              <div className="absolute top-20 right-16 w-16 h-16 border border-emerald-400/10 transform rotate-12 animate-pulse delay-500"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 border border-green-400/10 transform -rotate-45 animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 right-12 w-24 h-24 border border-emerald-400/10 transform rotate-30 animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-green-400/5 rounded-lg p-6 border border-green-400/20 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Was passiert als nächstes?</strong> Unser HR-Team prüft deine Bewerbung und alle Unterlagen sorgfältig. Bei passenden Qualifikationen melden wir uns per E-Mail für das nächste Gespräch. Danke für dein Interesse an <span className="text-green-400 font-semibold">Devomon</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
