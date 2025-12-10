import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { ResourceCard } from "@/components/resource-card";
import { getCategoryIcon } from "@/components/icons";
import type { Category, Resource } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} - DevKit`,
    description: `Browse ${slug} resources on DevKit`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  // Fetch category
  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  // Fetch resources in this category
  const { data: resources } = await supabase
    .from("resources")
    .select("*, category:categories(*)")
    .eq("category_id", category?.id)
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  const CategoryIcon = getCategoryIcon(category?.icon || "package");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-linear-to-b from-black via-[#0a1628] to-[#1e40af] py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.1),transparent)]" />

        <div className="relative z-10 w-full px-6 md:px-10">
          {/* Back Button */}
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Categories</span>
          </Link>

          {/* Category Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
              <CategoryIcon className="h-7 w-7 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {category?.name}
              </h1>
              <p className="text-white/70 text-lg">{category?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full px-6 md:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {resources && resources.length > 0 ? (
            <div className="space-y-8">
              <div className="text-white/60">
                <p>
                  Showing {resources.length}{" "}
                  {resources.length === 1 ? "resource" : "resources"}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(resources as Resource[]).map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-white/30" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                No resources yet
              </h3>
              <p className="text-white/60 mb-8 max-w-md">
                Resources in this category will appear here once added.
              </p>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6"
              >
                <Link href="/resources">Browse All Resources</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
