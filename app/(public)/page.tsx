import Link from "next/link";
// import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
// import { ResourceCard } from "@/components/resource-card";
// import { CategoryCard } from "@/components/category-card";
// import { Icons } from "@/components/icons";
// import type { Category, Resource } from "@/lib/types";

import {
  ChevronRight,
  MessageSquare,
  Sparkles,
  Code2,
  Blocks,
  Database,
  Palette,
  Terminal,
  GitBranch,
  Layers,
  Cpu,
  Braces,
  Globe,
  Puzzle,
  Zap,
} from "lucide-react";

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center border-b border-white/10 bg-linear-to-b from-black via-[#0a1628] to-[#1e40af] text-white">
        {/* Vibrant blue radial glow */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.5),transparent)]" />
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.3),transparent)]" />

        {/* Floating Icons - Left Side */}
        <div className="absolute left-[3%] top-1/4 hidden lg:block">
          <div className="relative">
            {/* Code icon */}
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 rotate-6 flex items-center justify-center">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            {/* Database icon */}
            <div className="absolute left-12 top-16 h-14 w-14 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-400/30 -rotate-12 flex items-center justify-center">
              <Database className="h-7 w-7 text-white" />
            </div>
            {/* Terminal icon */}
            <div className="absolute -left-8 top-32 h-12 w-12 rounded-xl bg-linear-to-br from-slate-600 to-slate-800 shadow-lg shadow-slate-500/30 rotate-12 flex items-center justify-center">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            {/* Palette icon */}
            <div className="absolute left-6 top-48 h-14 w-14 rounded-xl bg-linear-to-br from-pink-500 to-rose-600 shadow-lg shadow-pink-500/30 -rotate-6 flex items-center justify-center">
              <Palette className="h-7 w-7 text-white" />
            </div>
            {/* Git icon */}
            <div className="absolute -left-2 top-64 h-12 w-12 rounded-xl bg-linear-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/30 rotate-12 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Floating Icons - Right Side */}
        <div className="absolute right-[3%] top-1/5 hidden lg:block">
          <div className="relative">
            {/* Blocks/Components icon */}
            <div className="absolute right-0 top-0 h-14 w-14 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/30 -rotate-6 flex items-center justify-center">
              <Blocks className="h-7 w-7 text-white" />
            </div>
            {/* Globe/API icon */}
            <div className="absolute right-20 top-12 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30 rotate-12 flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            {/* Layers icon */}
            <div className="absolute right-4 top-28 h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-indigo-500/30 -rotate-6 flex items-center justify-center">
              <Layers className="h-8 w-8 text-white" />
            </div>
            {/* Puzzle/Plugin icon */}
            <div className="absolute right-24 top-40 h-12 w-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-400/30 rotate-6 flex items-center justify-center">
              <Puzzle className="h-6 w-6 text-white" />
            </div>
            {/* CPU/Tech icon */}
            <div className="absolute right-8 top-52 h-14 w-14 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-teal-400/30 rotate-6 flex items-center justify-center">
              <Cpu className="h-7 w-7 text-white" />
            </div>
            {/* Braces/JSON icon */}
            <div className="absolute right-28 top-64 h-10 w-10 rounded-lg bg-gradient-to-br from-red-400 to-rose-500 shadow-lg shadow-red-400/30 -rotate-12 flex items-center justify-center">
              <Braces className="h-5 w-5 text-white" />
            </div>
            {/* Zap/Performance icon */}
            <div className="absolute right-2 top-72 h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/30 rotate-12 flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Main Hero Content (centered) */}
        <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center min-h-screen">
          <div className="mx-auto max-w-4xl text-center">
            {/* Update Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span>Your developer toolkit awaits</span>
              <ChevronRight className="h-4 w-4" />
            </div>

            <h1 className="text-balance text-[2.8rem] md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-white">Your </span>
              <span className="text-blue-300">all-in-one </span>
              <span className="text-white">developer resource hub.</span>
            </h1>
            <p className="mt-8 text-pretty text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
              Discover, use, and learn with premium APIs, UI components,
              templates, tools, tutorials, libraries and more.
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center font-semibold text-lg px-8 py-6 shadow-lg shadow-blue-600/30 rounded-full transition-all duration-300"
              >
                <Link href="/resources">
                  Browse Resources
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:bg-white/10 hover:border-white/40 text-white bg-transparent font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Link href="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="w-full px-4 py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Why DevKit?</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
            Built for developers,
            <span className="text-blue-400"> by developers</span>
          </h2>
          <p className="mt-6 text-pretty text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            DevKit is a developer-focused resource platform designed to empower
            you with high-quality, ready-to-use content for building modern
            applications. Whether you&apos;re a beginner or experienced, DevKit
            helps you save time, discover tools, learn faster, and build better
            products.
          </p>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Save Time
              </h3>
              <p className="text-gray-400 text-sm">
                Find curated resources quickly without endless searching across
                the web.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quality First
              </h3>
              <p className="text-gray-400 text-sm">
                Every resource is reviewed for quality, relevance, and
                usefulness.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 mx-auto">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Always Updated
              </h3>
              <p className="text-gray-400 text-sm">
                New resources added regularly to keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-blue-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
        <div className="relative z-10 w-full px-4 py-20 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
              Have a suggestion?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Have an idea, suggestion, or want to collaborate? We&apos;d love
              to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300"
            >
              <Link href="/contact">
                Get in Touch
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
