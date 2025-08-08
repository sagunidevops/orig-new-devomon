import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
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

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Document Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: August 1, 2025</p>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to www.devomon.io, callisto.devomon.io, and voidborn.devomon.io (collectively, the &quot;Websites&quot;), operated by SAGUNI Studios (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;).
              </p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of our Websites, online services, games (including Callisto), digital comics (including Voidborn), and any related content, features, or products (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                <strong>By accessing or using any of our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.</strong>
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You must be at least 13 years old (or the legal age in your jurisdiction) to use our Services. Users under 18 must have the consent of a parent or legal guardian.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Accounts</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>Registration:</strong> Certain features (e.g., early access, forums, online gameplay) may require account creation. You agree to provide accurate, current, and complete information.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>Security:</strong> You are responsible for all activity under your account. Notify us immediately of any unauthorized use or security breach.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                All content provided through our Services—including the Devomon IP, Callisto game, Voidborn webtoon, software, graphics, music, and branding—is owned or licensed by SAGUNI Studios and is protected by copyright, trademark, and other applicable laws.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You may not reproduce, modify, reverse-engineer, distribute, or create derivative works without our express written consent.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
              <p className="mb-2 text-muted-foreground leading-relaxed">
                You agree not to:
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • Use our Services for unlawful or unauthorized purposes<br/>
                • Attempt to hack, interfere with, or overload our servers<br/>
                • Upload or distribute viruses, spyware, or harmful code<br/>
                • Harass, abuse, or threaten other users<br/>
                • Use bots, crawlers, or automated scripts without permission
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. User-Generated Content</h2>
              <p className="mb-2 text-muted-foreground leading-relaxed">
                If you submit or post any content (e.g., fan art, feedback, forum posts):
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • You grant SAGUNI Studios a worldwide, royalty-free, non-exclusive license to use, display, reproduce, and distribute your content in connection with the Services.<br/>
                • You remain solely responsible for your content and must ensure it does not infringe on third-party rights or violate any applicable laws.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Purchases & Payments</h2>
              <p className="mb-2 text-muted-foreground leading-relaxed">
                When you purchase in-game items, merchandise, or digital content:
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • You agree to provide valid payment details and authorize charges.<br/>
                • All purchases are final and non-refundable, except where required by law.<br/>
                • We reserve the right to adjust pricing or availability at any time.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our Services are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or that our Services will meet your expectations.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="mb-2 text-muted-foreground leading-relaxed">
                To the maximum extent allowed by law:
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • SAGUNI Studios shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from the use or inability to use our Services.<br/>
                • Our total liability to you shall not exceed the amount you paid in the 12 months prior to the claim.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless SAGUNI Studios, its affiliates, and its employees from any claims, liabilities, damages, losses, or expenses resulting from your violation of these Terms or misuse of the Services.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to any Service at any time, with or without notice, if you violate these Terms or engage in harmful behavior toward the community or platform.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Brandenburg, Switzerland, without regard to conflict of laws principles. Any disputes shall be resolved in the competent courts of that jurisdiction.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to These Terms</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We may modify these Terms from time to time. If changes are made, we will update the &quot;Last Updated&quot; date. Continued use of the Services after such changes constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                For questions or concerns about these Terms, please contact our team via the Email Support button on our website or write to us at:
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                <strong>Email:</strong> <a href="mailto:support@devomon.io" className="text-accent hover:text-accent/80 transition-colors">support@devomon.io</a>
              </p>
            </section>

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