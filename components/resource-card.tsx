import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Icons,
  getCategoryIconDynamic,
  getResourceTypeIcon,
} from "@/components/icons";
import type { Resource } from "@/lib/types";
import { ExternalLink, Star } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const typeColors: Record<string, string> = {
  api: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  template: "bg-green-500/20 text-green-300 border border-green-500/30",
  tool: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  "ui-component":
    "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  tutorial: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  library: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const CategoryIcon = resource.category?.icon
    ? getCategoryIconDynamic(resource.category.icon)
    : Icons.layers;

  const TypeIcon = getResourceTypeIcon(resource.type);

  // Get color for type badge, default to slate for custom types
  const typeColor =
    typeColors[resource.type] ||
    "bg-slate-500/20 text-slate-300 border border-slate-500/30";

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30">
              <CategoryIcon className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <Link
                href={`/resources/${resource.slug}`}
                className="font-semibold text-white hover:text-blue-300 transition-colors line-clamp-2 block"
              >
                {resource.title}
              </Link>
              {resource.category && (
                <p className="text-xs text-white/50 mt-1">
                  {resource.category.name}
                </p>
              )}
            </div>
          </div>
          {resource.featured && (
            <Star className="h-4 w-4 shrink-0 text-yellow-400 fill-yellow-400" />
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/70 line-clamp-2 mb-4 flex-1">
          {resource.description}
        </p>

        {/* Tags and Type Badge */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            className={`text-xs font-medium flex items-center gap-1.5 ${typeColor}`}
          >
            <TypeIcon className="h-3 w-3" />
            {resource.type.replace("-", " ")}
          </Badge>
          {resource.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              className="text-xs bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Visit Button */}
        <Button
          asChild
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Visit Resource
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
