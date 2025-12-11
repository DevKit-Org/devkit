"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Icons.home },
  { href: "/admin/resources", label: "Resources", icon: Icons.layers },
  { href: "/admin/categories", label: "Categories", icon: Icons.tag },
  { href: "/admin/messages", label: "Messages", icon: Icons.messageSquare },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-slate-950">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Icons.layers className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-xl text-white">DevKit</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-slate-800 hover:text-gray-200"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-slate-800 hover:text-gray-200 transition-colors"
        >
          <Icons.externalLink className="h-4 w-4" />
          View Site
        </Link>
      </div>
    </aside>
  );
}
