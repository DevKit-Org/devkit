import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpSuccessPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a1628] to-[#1e40af]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.2),transparent)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 md:px-0">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center mb-8"
          >
            <Image
              src="/main-logo.png"
              alt="DevKit"
              width={140}
              height={60}
              className="rounded-sm"
            />
          </Link>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" />
              <div className="relative bg-green-500/10 border border-green-500/30 rounded-full p-4">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">Almost There!</h1>
          <p className="text-white/60 text-sm">
            We have sent you a confirmation link to activate your account
          </p>
        </div>

        {/* Success Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
          <div className="space-y-4 text-center">
            <p className="text-white/80">
              Check your email inbox and click the confirmation link to activate
              your admin account.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-xs text-blue-300">
                💡 Tip: Check your spam folder if you do not see the email in
                your inbox
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/40 font-medium">
              NEXT STEPS
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Steps */}
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex-shrink-0 text-xs font-semibold">
                1
              </span>
              <span className="text-white/70">
                Click the link in your email
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex-shrink-0 text-xs font-semibold">
                2
              </span>
              <span className="text-white/70">
                Your account will be confirmed
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex-shrink-0 text-xs font-semibold">
                3
              </span>
              <span className="text-white/70">
                Log in to your admin dashboard
              </span>
            </li>
          </ol>

          {/* Back to Login */}
          <Link
            href="/auth/login"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            Go to Login
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
