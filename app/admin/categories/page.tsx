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
import { Icons, getCategoryIcon } from "@/components/icons";
import { DeleteCategoryButton } from "@/components/admin/delete-category-button";
import type { Category } from "@/lib/types";

export default async function AdminCategoriesPage() {
  const supabase = await createClient();

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Categories
          </h2>
          <p className="text-gray-400">Manage resource categories</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/admin/categories/new">
            <Icons.plus className="mr-2 h-4 w-4" />
            Add Category
          </Link>
        </Button>
      </div>

      <div className="rounded-lg border border-white/10 bg-slate-900">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-slate-800">
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Slug</TableHead>
              <TableHead className="text-gray-400">Description</TableHead>
              <TableHead className="text-gray-400">Created</TableHead>
              <TableHead className="w-[100px] text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {((categories as Category[]) || []).map((category) => {
              const Icon = getCategoryIcon(category.icon);
              return (
                <TableRow
                  key={category.id}
                  className="border-white/10 hover:bg-slate-800"
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-white">
                        {category.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-400">
                    {category.slug}
                  </TableCell>
                  <TableCell className="max-w-xs truncate text-gray-400">
                    {category.description || "—"}
                  </TableCell>
                  <TableCell className="text-gray-400">
                    {new Date(category.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-slate-800"
                      >
                        <Link href={`/admin/categories/${category.id}/edit`}>
                          <Icons.pencil className="h-4 w-4 text-gray-400" />
                        </Link>
                      </Button>
                      <DeleteCategoryButton categoryId={category.id} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            {(!categories || categories.length === 0) && (
              <TableRow className="border-white/10">
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-gray-400"
                >
                  No categories yet. Add your first category to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
