import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons, getCategoryIcon } from "@/components/icons";
import { ResourceCard } from "@/components/resource-card";
import type { Resource } from "@/lib/types";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: resource } = await supabase
    .from("resources")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!resource) {
    return { title: "Resource Not Found - DevKit" };
  }

  return {
    title: `${resource.title} - DevKit`,
    description: resource.description || `View ${resource.title} on DevKit`,
  };
}

const typeColors: Record<string, string> = {
  api: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  template: "bg-green-500/10 text-green-600 dark:text-green-400",
  tool: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "ui-component": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  tutorial: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  library: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: resource } = await supabase
    .from("resources")
    .select("*, category:categories(*)")
    .eq("slug", slug)
    .single();

  if (!resource) {
    notFound();
  }

  const typedResource = resource as Resource;

  // Fetch related resources from same category
  let relatedResources: Resource[] = [];
  if (typedResource.category_id) {
    const { data: related } = await supabase
      .from("resources")
      .select("*, category:categories(*)")
      .eq("category_id", typedResource.category_id)
      .neq("id", typedResource.id)
      .limit(3);
    relatedResources = (related || []) as Resource[];
  }

  const CategoryIcon = typedResource.category
    ? getCategoryIcon(typedResource.category.icon)
    : Icons.layers;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <Icons.arrowLeft className="h-4 w-4" />
            <span>Back to Resources</span>
          </Link>

          <div className="flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
              <CategoryIcon className="h-10 w-10 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {typedResource.title}
                </h1>
                {typedResource.featured && (
                  <Icons.star className="h-6 w-6 text-amber-400 fill-amber-400" />
                )}
              </div>
              {typedResource.category && (
                <Link
                  href={`/categories/${typedResource.category.slug}`}
                  className="text-gray-400 hover:text-blue-300 transition-colors inline-block"
                >
                  {typedResource.category.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={`${typeColors[typedResource.type]} border-0`}>
                  {typedResource.type.replace("-", " ")}
                </Badge>
                {typedResource.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/10 text-gray-300 hover:bg-white/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm p-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  About this resource
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {typedResource.description || "No description available."}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <a
                  href={typedResource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource
                  <Icons.externalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm p-6 space-y-4">
                <h3 className="font-semibold text-white">Resource Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Type
                    </dt>
                    <dd className="font-medium text-gray-200 capitalize">
                      {typedResource.type.replace("-", " ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Category
                    </dt>
                    <dd className="font-medium text-gray-200">
                      {typedResource.category?.name || "Uncategorized"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Added
                    </dt>
                    <dd className="font-medium text-gray-200">
                      {new Date(typedResource.created_at).toLocaleDateString()}
                    </dd>
                  </div>
                </dl>
              </div>

              {relatedResources.length > 0 && (
                <div>
                  <h3 className="font-semibold text-white mb-4">
                    Related Resources
                  </h3>
                  <div className="space-y-4">
                    {relatedResources.map((related) => (
                      <ResourceCard key={related.id} resource={related} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
