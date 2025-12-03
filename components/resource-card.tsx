import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons, getCategoryIcon } from "@/components/icons";
import type { Resource } from "@/lib/types";

interface ResourceCardProps {
  resource: Resource;
}

const typeColors: Record<string, string> = {
  api: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  template: "bg-green-500/10 text-green-600 dark:text-green-400",
  tool: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "ui-component": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  tutorial: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  library: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const CategoryIcon = resource.category?.icon
    ? getCategoryIcon(resource.category.icon)
    : Icons.layers;

  return (
    <Card className="group flex flex-col h-full transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <CategoryIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <Link
                href={`/resources/${resource.slug}`}
                className="font-semibold leading-tight hover:underline line-clamp-1"
              >
                {resource.title}
              </Link>
              {resource.category && (
                <p className="text-xs text-muted-foreground">
                  {resource.category.name}
                </p>
              )}
            </div>
          </div>
          {resource.featured && (
            <Icons.star className="h-4 w-4 shrink-0 text-yellow-500 fill-yellow-500" />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="secondary" className={typeColors[resource.type]}>
            {resource.type.replace("-", " ")}
          </Badge>
          {resource.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            Visit Resource
            <Icons.externalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
