"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Category, ResourceType } from "@/lib/types";

const resourceTypes: { value: ResourceType; label: string }[] = [
  { value: "api", label: "APIs" },
  { value: "template", label: "Templates" },
  { value: "tool", label: "Tools" },
  { value: "ui-component", label: "UI Components" },
  { value: "tutorial", label: "Tutorials" },
  { value: "library", label: "Libraries" },
];

interface ResourceFiltersProps {
  categories: Category[];
  currentType?: string;
  currentCategory?: string;
}

export function ResourceFilters({
  categories,
  currentType,
  currentCategory,
}: ResourceFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page"); // Reset to page 1
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    const params = new URLSearchParams();
    // Preserve search query if on search page
    const q = searchParams.get("q");
    if (q) params.set("q", q);
    router.push(`${pathname}?${params.toString()}`);
  }

  const hasFilters = currentType || currentCategory;

  return (
    <div className="space-y-4">
      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="w-full justify-start text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
        >
          <Icons.x className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}

      <div className="rounded-lg border border-white/10 bg-slate-800/30 backdrop-blur-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10">
          <h3 className="text-sm font-medium flex items-center gap-2 text-white">
            <Icons.filter className="h-4 w-4" />
            Type
          </h3>
        </div>
        <div className="p-3 space-y-1">
          {resourceTypes.map((type) => (
            <button
              key={type.value}
              onClick={() =>
                updateFilter(
                  "type",
                  currentType === type.value ? null : type.value
                )
              }
              className={cn(
                "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                currentType === type.value
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  : "text-gray-400 hover:bg-slate-700/30 hover:text-gray-300"
              )}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-slate-800/30 backdrop-blur-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10">
          <h3 className="text-sm font-medium flex items-center gap-2 text-white">
            <Icons.tag className="h-4 w-4" />
            Category
          </h3>
        </div>
        <div className="p-3 space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                updateFilter(
                  "category",
                  currentCategory === category.slug ? null : category.slug
                )
              }
              className={cn(
                "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                currentCategory === category.slug
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  : "text-gray-400 hover:bg-slate-700/30 hover:text-gray-300"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
