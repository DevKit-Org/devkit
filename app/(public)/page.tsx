import Link from "next/link";
// import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
// import { ResourceCard } from "@/components/resource-card";
// import { CategoryCard } from "@/components/category-card";
// import { Icons } from "@/components/icons";
// import type { Category, Resource } from "@/lib/types";

import { ChevronRight, MessageSquare } from "lucide-react";

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center border-b border-border/40 bg-gradient-to-b from-black via-[#091743] to-blue-900 text-white">
        {/* Extra black-blue radial accent */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1240e0_40%,transparent_90%)]" />
        {/* Main Hero Content (centered) */}
        <div className="w-full px-4 flex flex-col items-center justify-center min-h-screen">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-[2.8rem] md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-primary">Your </span>
              <span className="text-blue-300">all-in-one </span>
              developer resource hub.
            </h1>
            <p className="mt-8 text-pretty text-xl md:text-2xl text-[#e2eaff] font-medium max-w-2xl mx-auto">
              Discover, use, and learn with premium APIs, UI components,
              templates, tools, tutorials, libraries and more.
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-700 text-white flex items-center justify-center font-semibold text-xl px-12 py-5 shadow-md hover:bg-blue-800  md:text-xl"
              >
                <Link href="/resources">
                  Browse Resources
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border hover:text-white bg-transparent font-semibold px-12 py-5 text-xl"
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
