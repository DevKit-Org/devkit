// import { createClient } from "@/lib/supabase/server";
// import { CategoryCard } from "@/components/category-card";
// import type { Category } from "@/lib/types";
import type { Metadata } from "next";
import { Sparkles, Layers, FolderOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Categories - DevKit",
  description: "Browse developer resources by category",
};

export default async function CategoriesPage() {
  // const supabase = await createClient();

  // const { data: categories } = await supabase
  //   .from("categories")
  //   .select("*")
  //   .order("name");

  // Get resource counts for each category
  // const categoriesWithCounts = await Promise.all(
  //   (categories || []).map(async (category: Category) => {
  //     const { count } = await supabase
  //       .from("resources")
  //       .select("*", { count: "exact", head: true })
  //       .eq("category_id", category.id);
  //     return { category, count: count || 0 };
  //   })
  // );

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
            <span>Organized for easy discovery</span>
          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
            <Layers className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
            Browse <span className="text-blue-400">Categories</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of developer resources organized by
            category. Find exactly what you need, faster.
          </p>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="h-16 w-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-4">
              <FolderOpen className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              No categories yet
            </h3>
            <p className="mt-2 text-gray-400">
              Categories will appear here once added.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
