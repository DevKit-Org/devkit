import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";
  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "12");
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  if (!q.trim()) {
    return NextResponse.json({
      data: [],
      pagination: { page, limit, total: 0, totalPages: 0 },
    });
  }

  // Build search query using ilike for flexible matching
  let query = supabase
    .from("resources")
    .select("*, category:categories(*)", { count: "exact" })
    .or(`title.ilike.%${q}%,description.ilike.%${q}%`);

  if (type) {
    query = query.eq("type", type);
  }
  if (category) {
    query = query.eq("category_id", category);
  }

  const { data, error, count } = await query
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    data,
    pagination: {
      page,
      limit,
      total: count || 0,
      totalPages: Math.ceil((count || 0) / limit),
    },
  });
}
