import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-linear-to-b from-black via-[#0a1628] to-[#1e40af] py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.1),transparent)]" />

        <div className="relative z-10 w-full px-6 md:px-10">
          <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Cookies Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookies Policy
          </h1>
          <p className="text-white/70 max-w-2xl">
            Learn how we use cookies and similar technologies on DevKit.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-6 md:px-10 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              1. What Are Cookies?
            </h2>
            <p className="text-white/70 leading-relaxed">
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              are widely used in order to make websites work, or work more
              efficiently, as well as to provide information to the owners of
              the site.
            </p>
            <p className="text-white/70 leading-relaxed">
              Cookies allow web applications to respond to you as an individual.
              The web application can tailor its operations to your needs, likes
              and dislikes by gathering and remembering information about your
              preferences.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Essential Cookies
                </h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies are necessary for the operation of our website.
                  They include, for example, cookies that enable you to log into
                  secure areas of our website or use shopping carts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Analytical/Performance Cookies
                </h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies allow us to recognize and count the number of
                  visitors and to see how visitors move around our website. This
                  helps us to improve the way our website works, for example, by
                  ensuring that users are finding what they are looking for
                  easily.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Functional Cookies
                </h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies are used to recognize you when you return to our
                  website. This enables us to personalize our content for you
                  and remember your preferences (for example, your choice of
                  language or region).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Targeting/Advertising Cookies
                </h3>
                <p className="text-white/70 leading-relaxed">
                  These cookies record your visit to our website, the pages you
                  have visited and the links you have followed. We will use this
                  information to make our website and the advertising displayed
                  on it more relevant to your interests.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              3. Third-Party Cookies
            </h2>
            <p className="text-white/70 leading-relaxed">
              We also use third-party cookies from trusted service providers.
              These may include analytics providers, advertising partners, and
              other service providers. These third parties may collect
              information about you online when you use our website.
            </p>
            <p className="text-white/70 leading-relaxed">
              Common third-party services include:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Google Analytics for website analytics</li>
              <li>Authentication services from Supabase</li>
              <li>Advertising partners for promotional content</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              4. How to Control Cookies
            </h2>
            <p className="text-white/70 leading-relaxed">
              You have the right to choose whether or not to accept cookies.
              However, please note that if you choose to refuse cookies, you may
              not be able to use the full functionality of our website.
            </p>
            <p className="text-white/70 leading-relaxed">
              Most web browsers allow some control of most cookies through the
              browser settings. To find out more about cookies, including how to
              see what cookies have been set and how to manage and delete them,
              visit:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                <Link
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  www.allaboutcookies.org
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  www.youronlinechoices.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              5. Cookie Settings by Browser
            </h2>
            <p className="text-white/70 leading-relaxed">
              To manage cookies, you can set your browser to:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                Alert you when a website tries to place a cookie on your device
              </li>
              <li>Block all cookies or only third-party cookies</li>
              <li>Delete cookies when you close your browser window</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              For detailed instructions on how to manage cookies in your
              specific browser, please visit the help section of your browser.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Do Not Track</h2>
            <p className="text-white/70 leading-relaxed">
              Some browsers include a Do Not Track feature. Most web
              applications do not currently respond to Do Not Track browser
              signals due to the lack of an agreed-upon standard for recognizing
              and implementing DNT signals. However, DevKit respects browser Do
              Not Track signals where applicable.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              7. Changes to This Policy
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Cookies Policy from time to time to reflect
              changes in technology, legislation, or other factors. Please check
              this page regularly to see any updates or changes to our cookies
              policy.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about our use of cookies or this Cookies
              Policy, please contact us at:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
              <p className="text-white/70">
                Email:{" "}
                <span className="text-blue-400">info.devkit@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-sm text-white/50 pt-8 border-t border-white/10">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
