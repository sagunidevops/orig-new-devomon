import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Document Header */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">Last Updated: August 1, 2025</p>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This Privacy Policy explains how SAGUNI Studios (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) collects, uses, and shares your personal information when you:
              </p>
              <ul className="text-lg text-muted-foreground mt-4 space-y-2">
                <li>• Visit www.devomon.io, callisto.devomon.io, or voidborn.devomon.io (the &quot;Websites&quot;)</li>
                <li>• Play our game Callisto</li>
                <li>• Read our webtoon Voidborn</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                By using our Websites and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">1.1 Information You Provide Directly</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>a. Account Information:</strong> Name, username, email address, and password when you register.<br/>
                <strong>b. Communications:</strong> Name, email address, and message content when you contact support.<br/>
                <strong>c. Subscriptions & Sign-Ups:</strong> Email address and preferences when you subscribe to newsletters, beta tests, or updates.
              </p>

              <h3 className="text-xl font-medium mb-3">1.2 Information Collected Automatically</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong>a. Usage Data:</strong> IP address, browser type/version, device type, operating system, referring URLs, pages viewed, and timestamps.<br/>
                <strong>b. Cookies & Tracking:</strong> See our Cookie Policy for details on the cookies and similar technologies we use.
              </p>

              <h3 className="text-xl font-medium mb-3">1.3 Third-Party Data</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                If you connect via external platforms (e.g. Discord, social logins), we may receive profile data as permitted by your privacy settings on those services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium mb-3">2.1 Service Provision & Improvement</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • Operate and maintain the Websites, Callisto game, and Voidborn webtoon<br/>
                • Personalize content, features, and recommendations
              </p>

              <h3 className="text-xl font-medium mb-3">2.2 Communications</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • Respond to support inquiries<br/>
                • Send newsletters, updates, and marketing (with your consent)
              </p>

              <h3 className="text-xl font-medium mb-3">2.3 Analytics & Security</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • Monitor, analyze, and report on usage patterns and system performance<br/>
                • Prevent fraud and ensure the security of our services
              </p>

              <h3 className="text-xl font-medium mb-3">2.4 Legal & Compliance</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • Comply with legal obligations and enforce our Terms of Service
              </p>

              <h3 className="text-xl font-medium mb-3">2.5 Automated Decision-Making</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We may use automated systems (e.g., recommendation engines) to personalize content. These processes do not have a legal or similarly significant effect on you. You may request human review of any significant automated decision by contacting us.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
              
              <h3 className="text-xl font-medium mb-3">3.1 Service Providers</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Hosting providers, payment processors, analytics services (e.g. Google Analytics), email delivery (e.g. SendGrid), and other vendors who help us operate our services.
              </p>

              <h3 className="text-xl font-medium mb-3">3.2 Legal Requirements</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                If required by law, regulation, or to protect our rights, property, or safety.
              </p>

              <h3 className="text-xl font-medium mb-3">3.3 Business Transactions</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity under similar privacy terms.
              </p>

              <h3 className="text-xl font-medium mb-3">3.4 International Transfers</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Some service providers are located outside the EU/EEA. When we transfer your data to countries without an adequacy decision, we rely on Standard Contractual Clauses or other appropriate safeguards.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention & Security</h2>
              
              <h3 className="text-xl font-medium mb-3">4.1 Data Retention</h3>
              <p className="mb-2 text-muted-foreground leading-relaxed">
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law:
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • <strong>Account Information:</strong> Deleted within 2 years of account deletion or prolonged inactivity.<br/>
                • <strong>Usage & Log Data:</strong> Retained for up to 12 months, then anonymized.<br/>
                • <strong>Communications & Support Data:</strong> Retained for 3 years after resolution.
              </p>

              <h3 className="text-xl font-medium mb-3">4.2 Security Measures</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We implement industry-standard administrative, technical, and physical safeguards. However, no internet transmission or storage is completely secure.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Depending on your jurisdiction (e.g. GDPR in the EU, CCPA in California), you may have the right to:
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                • <strong>Access & Portability:</strong> Request a copy of your personal data.<br/>
                • <strong>Correction:</strong> Ask us to correct or update inaccurate information.<br/>
                • <strong>Deletion:</strong> Request erasure of your personal data.<br/>
                • <strong>Opt-Out of Marketing:</strong> Unsubscribe from promotional communications at any time via the link in our emails.<br/>
                • <strong>&quot;Do Not Sell My Personal Information (CCPA):&quot;</strong> We do not sell your data; to exercise any rights, contact us at privacy@devomon.io.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                For details on our use of cookies and how to manage your preferences, please see our Cookie Policy.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 (or the minimum age of digital consent in your jurisdiction). We do not knowingly collect personal information from minors.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Links to Other Sites</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our Websites may include links to third-party sites. We are not responsible for their privacy practices; please review their policies before interacting.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. If we make material changes, we will notify you by email (if you have provided one) or via a notice on our Websites. The &quot;Last Updated&quot; date at the top reflects the current version.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                <strong>Email:</strong> <a href="mailto:privacy@devomon.io" className="text-accent hover:text-accent/80 transition-colors">privacy@devomon.io</a>
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