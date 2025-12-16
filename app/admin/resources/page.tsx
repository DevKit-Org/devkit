import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { DeleteResourceButton } from "@/components/admin/delete-resource-button";
import { Pagination } from "@/components/pagination";
import { AdminSearchForm } from "@/components/admin/admin-search-form";
import type { Resource } from "@/lib/types";

const ITEMS_PER_PAGE = 10;

export default async function AdminResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number.parseInt(params.page || "1"));
  const searchQuery = params.q || "";

  const supabase = await createClient();

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from("resources")
    .select("*, category:categories(*)", { count: "exact" });

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data: resources, count } = await query
    .order("title", { ascending: true })
    .range(from, to);

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Resources
          </h2>
          <p className="text-gray-400">Manage your developer resources</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/admin/resources/new">
            <Icons.plus className="mr-2 h-4 w-4" />
            Add Resource
          </Link>
        </Button>
      </div>

      <AdminSearchForm
        initialQuery={searchQuery}
        placeholder="Search resources by title..."
      />

      <div className="rounded-lg border border-white/10 bg-slate-900">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-slate-800">
              <TableHead className="text-gray-400">Title</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Category</TableHead>
              <TableHead className="text-gray-400">Featured</TableHead>
              <TableHead className="text-gray-400">Created</TableHead>
              <TableHead className="w-[100px] text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {((resources as Resource[]) || []).map((resource) => (
              <TableRow
                key={resource.id}
                className="border-white/10 hover:bg-slate-800"
              >
                <TableCell className="font-medium text-white">
                  {resource.title}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="capitalize bg-slate-800 text-gray-200"
                  >
                    {resource.type.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-400">
                  {resource.category?.name || "—"}
                </TableCell>
                <TableCell>
                  {resource.featured ? (
                    <Icons.star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </TableCell>
                <TableCell className="text-gray-400">
                  {new Date(resource.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-slate-700"
                    >
                      <Link href={`/admin/resources/${resource.id}/edit`}>
                        <Icons.pencil className="h-4 w-4 text-gray-400" />
                      </Link>
                    </Button>
                    <DeleteResourceButton resourceId={resource.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {(!resources || resources.length === 0) && (
              <TableRow className="border-white/10">
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-gray-400"
                >
                  No resources yet. Add your first resource to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/admin/resources"
          />
        </div>
      )}
    </div>
  );
}
