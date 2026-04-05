import type React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-950">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader user={user} />
        <main className="flex-1 p-6 bg-slate-950">{children}</main>
      </div>
    </div>
  );
}
