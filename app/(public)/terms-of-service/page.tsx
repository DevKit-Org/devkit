import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
            <span>Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 max-w-2xl">
            Please read these terms carefully before using DevKit services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-6 md:px-10 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              1. Agreement to Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              By accessing and using DevKit, you accept and agree to be bound by
              and comply with these Terms of Service. If you do not agree to
              abide by the above, please do not use this service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Use License</h2>
            <p className="text-white/70 leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on DevKit for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempting to decompile or reverse engineer any software
                contained on the site
              </li>
              <li>
                Removing any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transferring the materials to another person or
                &quot;mirror&quot; the materials on any other server
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
            <p className="text-white/70 leading-relaxed">
              The materials on DevKit are provided on an &apos;as is&apos;
              basis. DevKit makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Limitations</h2>
            <p className="text-white/70 leading-relaxed">
              In no event shall DevKit or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on DevKit.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              5. Accuracy of Materials
            </h2>
            <p className="text-white/70 leading-relaxed">
              The materials appearing on DevKit could include technical,
              typographical, or photographic errors. DevKit does not warrant
              that any of the materials on the site are accurate, complete, or
              current. DevKit may make changes to the materials contained on the
              site at any time without notice.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Links</h2>
            <p className="text-white/70 leading-relaxed">
              DevKit has not reviewed all of the sites linked to its website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by DevKit of the
              site. Use of any such linked website is at the user&apos;s own
              risk.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Modifications</h2>
            <p className="text-white/70 leading-relaxed">
              DevKit may revise these terms of service for the website at any
              time without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which DevKit is
              located, and you irrevocably submit to the exclusive jurisdiction
              of the courts in that location.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. User Accounts</h2>
            <p className="text-white/70 leading-relaxed">
              If you create an account on DevKit, you are responsible for
              maintaining the confidentiality of your account information and
              password. You agree to accept responsibility for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              10. Contact Information
            </h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at:
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
