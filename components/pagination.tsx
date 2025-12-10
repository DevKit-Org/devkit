import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams?: Record<string, string | undefined>;
}

export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  searchParams = {},
}: PaginationProps) {
  function buildUrl(page: number) {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
  );

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="outline" size="icon" asChild disabled={currentPage <= 1}>
        <Link href={buildUrl(currentPage - 1)} aria-label="Previous page">
          <Icons.arrowLeft className="h-4 w-4" />
        </Link>
      </Button>

      {visiblePages.map((page, index) => {
        const prevPage = visiblePages[index - 1];
        const showEllipsis = prevPage && page - prevPage > 1;

        return (
          <span key={page} className="flex items-center gap-2">
            {showEllipsis && (
              <span className="px-2 text-muted-foreground">...</span>
            )}
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              asChild
            >
              <Link href={buildUrl(page)}>{page}</Link>
            </Button>
          </span>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage >= totalPages}
      >
        <Link href={buildUrl(currentPage + 1)} aria-label="Next page">
          <Icons.chevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
