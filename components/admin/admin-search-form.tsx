"use client";

import type React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface AdminSearchFormProps {
  initialQuery?: string;
  placeholder?: string;
}

export function AdminSearchForm({
  initialQuery = "",
  placeholder = "Search...",
}: AdminSearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }
    params.delete("page");
    router.push(`?${params.toString()}`);
  }

  function handleClear() {
    setQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    params.delete("page");
    router.push(`?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <div className="relative flex-1">
        <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 bg-slate-800 border-white/10 text-white placeholder:text-gray-500"
        />
      </div>
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Search
      </Button>
      {query && (
        <Button
          type="button"
          variant="outline"
          onClick={handleClear}
          className="border-white/10 text-gray-400 hover:bg-slate-800"
        >
          Clear
        </Button>
      )}
    </form>
  );
}
