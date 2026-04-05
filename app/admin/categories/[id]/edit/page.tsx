import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CategoryForm } from "@/components/admin/category-form";
import type { Category } from "@/lib/types";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Edit Category
        </h2>
        <p className="text-gray-400">Update category information</p>
      </div>

      <CategoryForm category={category as Category} />
    </div>
  );
}
