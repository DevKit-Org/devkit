import { CategoryForm } from "@/components/admin/category-form";

export default function NewCategoryPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Add Category
        </h2>
        <p className="text-gray-400">Create a new resource category</p>
      </div>

      <CategoryForm />
    </div>
  );
}
