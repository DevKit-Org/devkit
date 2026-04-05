import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ResourceForm } from "@/components/admin/resource-form";
import type { Category, Resource } from "@/lib/types";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditResourcePage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const [resourceResult, categoriesResult] = await Promise.all([
    supabase.from("resources").select("*").eq("id", id).single(),
    supabase.from("categories").select("*").order("name"),
  ]);

  if (!resourceResult.data) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Edit Resource
        </h2>
        <p className="text-gray-400">Update resource information</p>
      </div>

      <ResourceForm
        categories={(categoriesResult.data || []) as Category[]}
        resource={resourceResult.data as Resource}
      />
    </div>
  );
}
