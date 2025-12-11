import { createClient } from "@/lib/supabase/server";
import { ResourceForm } from "@/components/admin/resource-form";
import type { Category } from "@/lib/types";

export default async function NewResourcePage() {
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Add Resource
        </h2>
        <p className="text-gray-400">Create a new developer resource</p>
      </div>

      <ResourceForm categories={(categories || []) as Category[]} />
    </div>
  );
}
