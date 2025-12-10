import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 max-w-2xl">
            We are committed to protecting your privacy and ensuring you have a
            positive experience on our site.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-6 md:px-10 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              DevKit is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website.
            </p>
            <p className="text-white/70 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Personal Information
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We may collect information that you voluntarily provide,
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                  <li>Name and email address</li>
                  <li>Contact information</li>
                  <li>Account credentials for admin access</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  Automatically Collected Information
                </h3>
                <p className="text-white/70 leading-relaxed">
                  When you access our website, we automatically collect certain
                  information about your device and usage patterns, including:
                </p>
                <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral source</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              3. How We Use Your Information
            </h2>
            <p className="text-white/70 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>To provide and maintain our services</li>
              <li>To authenticate users and process admin access</li>
              <li>To send transactional and promotional emails</li>
              <li>To analyze usage patterns and improve our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              4. Information Sharing
            </h2>
            <p className="text-white/70 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                With service providers who assist us in operating our website
              </li>
              <li>When required by law or legal process</li>
              <li>To protect the security and integrity of our services</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
            <p className="text-white/70 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
            <p className="text-white/70 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability in certain circumstances</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@devkit.dev
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
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
