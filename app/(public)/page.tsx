import Link from "next/link";
// import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
// import { ResourceCard } from "@/components/resource-card";
// import { CategoryCard } from "@/components/category-card";
// import { Icons } from "@/components/icons";
// import type { Category, Resource } from "@/lib/types";

import { ChevronRight, MessageSquare, Sparkles } from "lucide-react";

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center border-b border-white/10 bg-gradient-to-b from-black via-[#0a1628] to-[#1e40af] text-white">
        {/* Vibrant blue radial glow */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.5),transparent)]" />
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.3),transparent)]" />

        {/* Decorative floating elements - left side */}
        <div className="absolute left-[5%] top-1/3 hidden lg:block">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-green-500/80 shadow-lg shadow-green-500/30 rotate-6" />
            <div className="absolute left-8 top-8 h-14 w-14 rounded-xl bg-blue-400/80 shadow-lg shadow-blue-400/30 -rotate-12" />
            <div className="absolute left-2 top-20 h-12 w-12 rounded-xl bg-red-400/80 shadow-lg shadow-red-400/30 rotate-12" />
            <div className="absolute -left-6 top-16 h-10 w-10 rounded-lg bg-slate-700/80 shadow-lg" />
          </div>
        </div>

        {/* Decorative floating elements - right side */}
        <div className="absolute right-[5%] top-1/4 hidden lg:block">
          <div className="relative">
            <div className="absolute right-0 top-0 h-12 w-12 rounded-xl bg-green-400/80 shadow-lg shadow-green-400/30 -rotate-6" />
            <div className="absolute right-16 top-8 h-10 w-10 rounded-xl bg-slate-600/80 shadow-lg rotate-12" />
            <div className="absolute right-8 top-20 h-14 w-14 rounded-xl bg-purple-400/80 shadow-lg shadow-purple-400/30 -rotate-6" />
            <div className="absolute right-24 top-28 h-10 w-10 rounded-lg bg-pink-400/80 shadow-lg shadow-pink-400/30" />
            <div className="absolute right-4 top-40 h-12 w-12 rounded-xl bg-blue-500/80 shadow-lg shadow-blue-500/30 rotate-6" />
            <div className="absolute right-20 top-48 h-8 w-8 rounded-lg bg-red-400/80 shadow-lg shadow-red-400/30" />
            <div className="absolute right-0 top-56 h-10 w-10 rounded-xl bg-orange-400/80 shadow-lg shadow-orange-400/30 -rotate-12" />
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
      <section className="w-full px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            About DevKit
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
            DevKit is a developer-focused resource platform designed to empower
            you with high-quality, ready-to-use content for building modern
            applications. Whether you&apos;re a beginner or experienced, DevKit
            helps you save time, discover tools, learn faster, and build better
            products.
          </p>
        </div>
      </section>
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-primary/5">
        <div className="w-full px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Have a suggestion?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have an idea, suggestion, or want to collaborate? We&apos;d love
              to hear from you.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Get in Touch
                <MessageSquare className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
