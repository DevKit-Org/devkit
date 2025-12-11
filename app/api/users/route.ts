import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  createUserWithRole,
  updateUserRole,
  deleteUser,
  getAllUsers,
  getUserRole,
} from "@/lib/supabase/user-management";

// GET /api/users - Get all users (admin only)
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user is admin
    const userRole = await getUserRole(user.id);
    if (userRole !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const result = await getAllUsers();

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json(result.users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/users - Create a new user (public for sign-up, admin for creating other users)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, role = "client" } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (!["admin", "client"].includes(role)) {
      return NextResponse.json(
        { error: "Invalid role. Must be 'admin' or 'client'" },
        { status: 400 }
      );
    }

    // Check if this is an admin creating a user (authenticated)
    const supabase = await createClient();
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();

    // If authenticated, verify admin role for non-client role creation
    if (currentUser && role !== "client") {
      const userRole = await getUserRole(currentUser.id);
      if (userRole !== "admin") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }

    // Allow public sign-ups with client role only
    if (!currentUser && role !== "client") {
      return NextResponse.json(
        { error: "Only authenticated admins can create non-client users" },
        { status: 403 }
      );
    }

    const result = await createUserWithRole(email, password, role);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: result.user?.id,
          email: result.user?.email,
          role: result.profile?.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
