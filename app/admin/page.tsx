import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [resourcesCount, categoriesCount, messagesCount] = await Promise.all([
    supabase.from("resources").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    {
      title: "Total Resources",
      value: resourcesCount.count || 0,
      icon: Icons.layers,
      href: "/admin/resources",
    },
    {
      title: "Categories",
      value: categoriesCount.count || 0,
      icon: Icons.tag,
      href: "/admin/categories",
    },
    {
      title: "Messages",
      value: messagesCount.count || 0,
      icon: Icons.messageSquare,
      href: "/admin/messages",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Dashboard
        </h2>
        <p className="text-gray-400">Overview of your DevKit resources</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="border-white/10 bg-slate-900 hover:border-blue-600/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-white/10 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link
              href="/admin/resources/new"
              className="flex items-center gap-2 p-3 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors"
            >
              <Icons.plus className="h-4 w-4" />
              <span>Add New Resource</span>
            </Link>
            <Link
              href="/admin/categories/new"
              className="flex items-center gap-2 p-3 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors"
            >
              <Icons.plus className="h-4 w-4" />
              <span>Add New Category</span>
            </Link>
            <Link
              href="/admin/messages"
              className="flex items-center gap-2 p-3 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors"
            >
              <Icons.messageSquare className="h-4 w-4" />
              <span>View Messages</span>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg text-white">
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-2">
            <p>Welcome to the DevKit admin dashboard!</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Manage your developer resources</li>
              <li>Organize content by categories</li>
              <li>Review contact messages from users</li>
              <li>Feature top resources on the homepage</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
