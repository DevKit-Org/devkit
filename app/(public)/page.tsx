import Link from "next/link";
// import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
// import { ResourceCard } from "@/components/resource-card";
// import { CategoryCard } from "@/components/category-card";
import { Icons } from "@/components/icons";
// import type { Category, Resource } from "@/lib/types";

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
        <div className=" w-full px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Ultimate Developer{" "}
              <span className="text-primary">Resource Hub</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              DevKit gives you APIs, templates, tools, UI components, and
              ready-to-use assets to speed up your development workflow.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800"
              >
                <Link href="/resources">
                  Browse Resources
                  <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border flex items-center justify-center border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <Link href="/categories">View Categories</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative grid background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
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
                <Icons.messageSquare className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
