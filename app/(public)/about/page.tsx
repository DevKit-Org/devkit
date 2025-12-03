import type { Metadata } from "next";
import {
  Sparkles,
  Users,
  Target,
  Zap,
  Heart,
  Code2,
  Rocket,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About - DevKit",
  description: "Learn more about DevKit and our mission",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <Sparkles className="h-4 w-4" />
            <span>Our Story</span>
          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">
            <Users className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
            About <span className="text-blue-400">DevKit</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We&apos;re on a mission to empower developers with the best
            resources, tools, and knowledge to build amazing products.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-4">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Built for developers,
                <span className="text-blue-400"> by developers</span>
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                DevKit was born from a simple idea: developers shouldn&apos;t
                have to spend hours searching for quality resources. We curate
                the best APIs, templates, tools, and tutorials so you can focus
                on what matters most — building great products.
              </p>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                Whether you&apos;re a beginner learning to code or a seasoned
                professional, DevKit is here to help you discover, learn, and
                create faster than ever before.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Fast</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Find resources in seconds, not hours
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Trusted</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Every resource is vetted for quality
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Developer-First
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Built with your workflow in mind
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Free</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Access all resources at no cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-4">
            <Heart className="h-4 w-4" />
            <span>Our Values</span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            What drives us
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Quality Over Quantity
              </h3>
              <p className="mt-3 text-gray-400">
                We only feature resources that meet our high standards for
                usefulness and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Community First
              </h3>
              <p className="mt-3 text-gray-400">
                DevKit is built for the developer community, and we value your
                feedback and contributions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Always Improving
              </h3>
              <p className="mt-3 text-gray-400">
                We continuously add new resources and features to help you stay
                ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
        <div className="relative z-10 px-4 py-20 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Ready to explore?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Start discovering the best developer resources today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <Link href="/resources">Browse Resources</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 hover:border-white/40 text-white bg-transparent font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
