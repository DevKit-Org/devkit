"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import type { User } from "@supabase/supabase-js";

interface AdminHeaderProps {
  user: User;
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-slate-950 px-6">
      <div className="flex items-center gap-4 md:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Icons.layers className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold text-white">DevKit Admin</span>
      </div>

      <div className="hidden md:block">
        <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                <span className="text-sm font-medium text-gray-300">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-slate-900 border-slate-800"
          >
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium text-white">{user.email}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
            <DropdownMenuSeparator className="bg-slate-800" />
            <DropdownMenuItem asChild>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white cursor-pointer"
              >
                <Icons.externalLink className="mr-2 h-4 w-4" />
                View Site
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-800" />
            <DropdownMenuItem
              onClick={handleSignOut}
              className="text-red-400 hover:text-red-300 cursor-pointer"
            >
              <Icons.logOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
