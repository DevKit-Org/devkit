import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();
  const { searchParams } = new URL(request.url);

  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "12");
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const featured = searchParams.get("featured");

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("resources")
    .select("*, category:categories(*)", { count: "exact" });

  if (category) {
    query = query.eq("category_id", category);
  }
  if (type) {
    query = query.eq("type", type);
  }
  if (featured === "true") {
    query = query.eq("featured", true);
  }

  const { data, error, count } = await query
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

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const { data, error } = await supabase
    .from("resources")
    .insert(body)
    .select("*, category:categories(*)")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
