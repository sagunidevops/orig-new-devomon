import Link from 'next/link';
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: August 1, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                This Cookie Policy explains what cookies are,
                how we use them, the types of cookies we employ
                (i.e. the information we collect via cookies),
                how that information is used, and how you can
                control your cookie preferences. For more detail
                on how we collect, store, and secure your
                personal data, please see our Privacy Policy.
                You may at any time change or withdraw your
                consent via the Cookie Declaration on our
                website. Your consent applies to the following
                domain: devomon.io.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. What Are Cookies?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cookies are small text files that are stored on
                your device when you load a website in your
                browser. They help us make our site work
                correctly, improve security, enhance your
                experience, and understand site performance so
                we can make ongoing improvements.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Cookies
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Like most online services, we use both
                first-party cookies (set by our site) and
                third-party cookies (set by partners) for
                various purposes:
              </p>
              <div className="ml-4 space-y-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">
                    First-party cookies
                  </strong>{" "}
                  are essential for core functionality and do
                  not collect any personally identifiable data.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">
                    Third-party cookies
                  </strong>{" "}
                  help us analyze site performance, secure our
                  services, deliver relevant ads, and speed up
                  your future interactions.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Types of Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Category
                      </th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Essential
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Required to enable basic site functions
                        such as login, session management, and
                        secure checkout. These cookies do not
                        store personal information.
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-medium text-foreground">
                        Statistics
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Collect anonymous data about site
                        traffic (e.g., number of visitors, pages
                        viewed, referral sources) to help us
                        understand and improve overall
                        performance.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Marketing
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Personalize and measure the
                        effectiveness of our advertising
                        campaigns. May also be used by
                        third-party ad networks to serve you
                        relevant ads on other sites.
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-medium text-foreground">
                        Functional
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Enable non-essential features such as
                        embedded videos and social sharing.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Preferences
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Remember your choices (e.g., language,
                        region) so we can tailor and streamline
                        your experience on future visits.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Detailed Cookie List
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Cookie Name
                      </th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Category
                      </th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Description
                      </th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        cookielawinfo-checkbox-necessary
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Essential
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Records user consent for &quot;Necessary&quot;
                        cookies.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        cookielawinfo-checkbox-analytics
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Statistics
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Records user consent for &quot;Analytics&quot;
                        cookies.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        cookielawinfo-checkbox-functional
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Functional
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Records user consent for &quot;Functional&quot;
                        cookies.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        cookielawinfo-checkbox-performance
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Statistics
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Records user consent for &quot;Performance&quot;
                        cookies.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        cookielawinfo-checkbox-others
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Marketing
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Records user consent for &quot;Other&quot; cookies
                        (including Marketing).
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        viewed_cookie_policy
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Essential
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Remembers that you have seen and
                        accepted the cookie notice; does not
                        store personal data.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        _ga, _gid
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Statistics
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Google Analytics cookies to distinguish
                        users and sessions.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        2 years / 24 hours
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        _fbp
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Marketing
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Facebook Pixel cookie for ad delivery
                        and performance measurement.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        3 months
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">
                        session_id
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Essential
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Maintains your logged-in session and
                        secures user interactions.
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Session
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Third-Party Providers:
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-base text-muted-foreground">
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                    >
                      Google Analytics 4 (analytics) – Privacy
                      Policy{" "}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="text-base text-muted-foreground">
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                    >
                      Facebook Pixel (marketing) – Privacy
                      Policy{" "}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="text-base text-muted-foreground">
                    <a
                      href="https://www.onetrust.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                    >
                      OneTrust (consent management) – Privacy
                      Policy{" "}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                On first visit, you will see a cookie banner
                where you can consent to or reject non-essential
                cookies. You can change your choices at any time
                by clicking the &quot;Privacy &amp; Cookie Settings&quot; link
                in the footer.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Additionally, most browsers let you block or
                delete cookies via their settings. To learn more
                about managing cookies, visit{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                >
                  www.aboutcookies.org{" "}
                  <ExternalLink className="w-3 h-3" />
                </a>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Do-Not-Track (DNT)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                If your browser sends a DNT header, we will
                disable all non-essential cookies.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Opt-Out Links
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                You may also opt out of many third-party
                advertising cookies by visiting:
              </p>
              <ul className="space-y-2 ml-4">
                <li>
                  <a
                    href="https://youradchoices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                  >
                    YourAdChoices{" "}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.networkadvertising.org/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                  >
                    Network Advertising Initiative{" "}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We may update this Cookie Policy from time to
                time. The &quot;Last Updated&quot; date at the top
                reflects the latest version.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Contact Us
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you have any questions about this Cookie
                Policy or our data practices, please contact us
                via our{" "}
                <Link
                  href="/support"
                  className="text-primary hover:text-primary/80"
                >
                  Support page
                </Link>{" "}
                or email us directly at{" "}
                <a
                  href="mailto:contact@devomon.io"
                  className="text-primary hover:text-primary/80"
                >
                  contact@devomon.io
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/">
            <Button
              variant="outline"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}