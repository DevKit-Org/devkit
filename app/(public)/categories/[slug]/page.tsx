import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Layers, ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { createClient } from "@/lib/supabase/server";
// import { ResourceCard } from "@/components/resource-card";
// import type { Category, Resource } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // const supabase = await createClient();
  // const { data: category } = await supabase
  //   .from("categories")
  //   .select("*")
  //   .eq("slug", slug)
  //   .single();

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} - DevKit`,
    description: `Browse ${slug} resources on DevKit`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  // const supabase = await createClient();

  // Fetch category
  // const { data: category } = await supabase
  //   .from("categories")
  //   .select("*")
  //   .eq("slug", slug)
  //   .single();

  // Fetch resources in this category
  // const { data: resources } = await supabase
  //   .from("resources")
  //   .select("*, category:categories(*)")
  //   .eq("category_id", category?.id)
  //   .order("featured", { ascending: false })
  //   .order("created_at", { ascending: false });

  const categoryName =
    slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Categories</span>
          </Link>

          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span>Category</span>
            </div>

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
              <Layers className="h-8 w-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
              {categoryName}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Browse all resources in the {categoryName.toLowerCase()} category.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-16 w-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-4">
              <Package className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              No resources yet
            </h3>
            <p className="mt-2 text-gray-400 mb-6">
              Resources in this category will appear here once added.
            </p>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6"
            >
              <Link href="/resources">Browse All Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
