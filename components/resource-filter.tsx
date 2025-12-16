"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";
import { PREDEFINED_RESOURCE_TYPES } from "@/lib/types";

const resourceTypes: { value: string; label: string }[] = [
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
          className="w-full justify-start"
        >
          <Icons.x className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Icons.filter className="h-4 w-4" />
            Type
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
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
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {type.label}
            </button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Icons.tag className="h-4 w-4" />
            Category
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
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
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {category.name}
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
