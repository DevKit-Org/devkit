import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryIcon, Icons } from "@/components/icons";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  resourceCount?: number;
}

export function CategoryCard({ category, resourceCount }: CategoryCardProps) {
  const CategoryIcon = getCategoryIcon(category.icon);

  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <CategoryIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {category.description}
            </p>
            {resourceCount !== undefined && (
              <p className="text-xs text-muted-foreground mt-1">
                {resourceCount} resources
              </p>
            )}
          </div>
          <Icons.chevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </CardContent>
      </Card>
    </Link>
  );
}
