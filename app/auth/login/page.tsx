"use client";

import type React from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push("/admin");
      router.refresh();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a1628] to-[#1e40af]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(37,99,235,0.2),transparent)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 md:px-0">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center mb-6"
          >
            <Image
              src="/main-logo.png"
              alt="DevKit"
              width={140}
              height={60}
              className="rounded-sm"
            />
          </Link>
          <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
            Admin Access
          </h1>
          <p className="text-white/60 text-sm">
            Sign in to your DevKit admin dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500/50 focus:bg-white/10 transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white/80 font-medium">
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500/50 focus:bg-white/10 transition-colors"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/40 font-medium">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="block w-full text-center text-sm text-white/70 hover:text-white transition-colors py-2 rounded-lg hover:bg-white/5"
          >
            Back to Home
          </Link>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
