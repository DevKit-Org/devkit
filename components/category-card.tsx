import Link from "next/link";
import { getCategoryIcon } from "@/components/icons";
import type { Category } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  resourceCount?: number;
}

export function CategoryCard({ category, resourceCount }: CategoryCardProps) {
  const CategoryIcon = getCategoryIcon(category.icon);

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon and Title */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors border border-blue-500/30">
              <CategoryIcon className="h-6 w-6 text-blue-400" />
            </div>
            <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
              {category.name}
            </h3>
            <p className="text-sm text-white/60 line-clamp-2 mb-4">
              {category.description}
            </p>
          </div>

          {/* Resource Count */}
          {resourceCount !== undefined && (
            <div className="inline-flex items-center">
              <span className="text-xs text-white/50 bg-white/5 rounded-full px-3 py-1">
                {resourceCount} {resourceCount === 1 ? "resource" : "resources"}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
