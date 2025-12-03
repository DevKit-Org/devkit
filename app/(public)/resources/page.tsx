import { Suspense } from "react";
// import { createClient } from "@/lib/supabase/server";
import { ResourceCard } from "@/components/resource-card";
// import { ResourceFilters } from "@/components/resource-filters";
// import { Pagination } from "@/components/pagination";
import type { Category, Resource } from "@/lib/types";
import type { Metadata } from "next";
import { Sparkles, Box, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources - DevKit",
  description: "Browse all developer resources, tools, APIs, and templates",
};

interface Props {
  searchParams: Promise<{
    page?: string;
    type?: string;
    category?: string;
  }>;
}

export default async function ResourcesPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number.parseInt(params.page || "1");
  const type = params.type;
  const categorySlug = params.category;
  const limit = 12;

  //   const supabase = await createClient();

  // Fetch categories for filter
  //   const { data: categories } = await supabase
  //     .from("categories")
  //     .select("*")
  //     .order("name");

  //   // Get category ID if slug provided
  //   let categoryId: string | undefined;
  //   if (categorySlug) {
  //     const { data: cat } = await supabase
  //       .from("categories")
  //       .select("id")
  //       .eq("slug", categorySlug)
  //       .single();
  //     categoryId = cat?.id;
  //   }

  // Build resources query
  //   const from = (page - 1) * limit;
  //   const to = from + limit - 1;

  //   let query = supabase
  //     .from("resources")
  //     .select("*, category:categories(*)", { count: "exact" });

  //   if (type) {
  //     query = query.eq("type", type);
  //   }
  //   if (categoryId) {
  //     query = query.eq("category_id", categoryId);
  //   }

  //   const { data: resources, count } = await query
  //     .order("featured", { ascending: false })
  //     .order("created_at", { ascending: false })
  //     .range(from, to);

  //   const totalPages = Math.ceil((count || 0) / limit);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <Sparkles className="h-4 w-4" />
            <span>Curated developer tools & resources</span>
          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30">
            <Box className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
            All <span className="text-blue-400">Resources</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our complete collection of APIs, templates, tools, UI
            components, tutorials, and libraries.
          </p>
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Filters would go here */}
          {/* <ResourceFilters categories={categories} /> */}

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-16 w-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-4">
              <Package className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              No resources yet
            </h3>
            <p className="mt-2 text-gray-400">
              Resources will appear here once added.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
