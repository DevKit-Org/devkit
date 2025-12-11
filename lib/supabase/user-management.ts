import { createAdminClient } from "./admin";

export type UserRole = "admin" | "client";

export async function createUserWithRole(
  email: string,
  password: string,
  role: UserRole = "client"
) {
  const supabase = await createAdminClient();

  try {
    // Create auth user
    const { data: authData, error: authError } =
      await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Auto-confirm email
      });

    if (authError || !authData.user) {
      throw new Error(`Failed to create user: ${authError?.message}`);
    }

    // Create user profile with role
    const { data: profileData, error: profileError } = await supabase
      .from("user_profiles")
      .insert({
        id: authData.user.id,
        email,
        role,
      })
      .select()
      .single();

    if (profileError) {
      // Clean up: delete the auth user if profile creation fails
      await supabase.auth.admin.deleteUser(authData.user.id);
      throw new Error(`Failed to create user profile: ${profileError.message}`);
    }

    return {
      success: true,
      user: authData.user,
      profile: profileData,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Update user role
export async function updateUserRole(userId: string, role: UserRole) {
  const supabase = await createAdminClient();

  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .update({ role, updated_at: new Date().toISOString() })
      .eq("id", userId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update user role: ${error.message}`);
    }

    return {
      success: true,
      profile: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Get user role
export async function getUserRole(userId: string): Promise<UserRole> {
  const supabase = await createAdminClient();

  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (error) {
      throw new Error(`Failed to get user role: ${error.message}`);
    }

    return data?.role || "client";
  } catch (error) {
    console.error("Error getting user role:", error);
    return "client";
  }
}

// Get all users (admin only)
export async function getAllUsers() {
  const supabase = await createAdminClient();

  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return {
      success: true,
      users: data || [],
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      users: [],
    };
  }
}

// Delete user (admin only)
export async function deleteUser(userId: string) {
  const supabase = await createAdminClient();

  try {
    // Delete profile first (due to cascade)
    const { error: profileError } = await supabase
      .from("user_profiles")
      .delete()
      .eq("id", userId);

    if (profileError) {
      throw new Error(`Failed to delete user profile: ${profileError.message}`);
    }

    // Delete auth user
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);

    if (authError) {
      throw new Error(`Failed to delete user: ${authError.message}`);
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
