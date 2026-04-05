import { NextRequest, NextResponse } from "next/server";
import { getUserRole } from "@/lib/supabase/user-management";

// GET /api/users/role - Get user's role
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId query parameter is required" },
        { status: 400 }
      );
    }

    const role = await getUserRole(userId);

    return NextResponse.json({
      role,
    });
  } catch (error) {
    console.error("Error getting user role:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
