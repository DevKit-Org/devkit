import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Tag,
  Layers,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { createClient } from "@/lib/supabase/server";
// import type { Resource } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // const supabase = await createClient();
  // const { data: resource } = await supabase
  //   .from("resources")
  //   .select("*")
  //   .eq("slug", slug)
  //   .single();

  return {
    title: `${
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
    } - DevKit`,
    description: `View details about ${slug} on DevKit`,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  // const supabase = await createClient();

  // Fetch resource
  // const { data: resource } = await supabase
  //   .from("resources")
  //   .select("*, category:categories(*)")
  //   .eq("slug", slug)
  //   .single();

  const resourceName =
    slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  // Placeholder resource data - replace with actual data from database
  const resource = {
    name: resourceName,
    description:
      "This resource will have a detailed description once the database is connected.",
    type: "tool",
    url: "#",
    category: { name: "General", slug: "general" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Resources</span>
          </Link>

          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span className="capitalize">{resource.type}</span>
            </div>

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30">
              <Globe className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
              {resource.name}
            </h1>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-400" />
                <Link
                  href={`/categories/${resource.category.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {resource.category.name}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-blue-400" />
                <span className="capitalize">{resource.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {/* Description Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm p-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              About this resource
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {resource.description}
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 hover:border-white/40 text-white bg-transparent font-semibold px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Link href="/resources">Explore More</Link>
              </Button>
            </div>
          </div>

          {/* Related Resources Placeholder */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-white mb-6">
              Related Resources
            </h2>
            <div className="rounded-2xl border border-white/10 bg-slate-800/30 p-8 text-center">
              <p className="text-gray-400">
                Related resources will appear here once the database is
                connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
