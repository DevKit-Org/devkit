"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import type { Category, Resource, ResourceType } from "@/lib/types";

const resourceTypes: { value: ResourceType; label: string }[] = [
  { value: "api", label: "API" },
  { value: "template", label: "Template" },
  { value: "tool", label: "Tool" },
  { value: "ui-component", label: "UI Component" },
  { value: "tutorial", label: "Tutorial" },
  { value: "library", label: "Library" },
];

interface ResourceFormProps {
  categories: Category[];
  resource?: Resource;
}

export function ResourceForm({ categories, resource }: ResourceFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(resource?.title || "");
  const [slug, setSlug] = useState(resource?.slug || "");
  const [type, setType] = useState<ResourceType>(resource?.type || "tool");
  const [description, setDescription] = useState(resource?.description || "");
  const [url, setUrl] = useState(resource?.url || "");
  const [tags, setTags] = useState(resource?.tags.join(", ") || "");
  const [categoryId, setCategoryId] = useState(resource?.category_id || "");
  const [featured, setFeatured] = useState(resource?.featured || false);

  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = {
      title,
      slug: slug || generateSlug(title),
      type,
      description,
      url,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      category_id: categoryId || null,
      featured,
    };

    try {
      const endpoint = resource
        ? `/api/resources/${resource.id}`
        : "/api/resources";
      const method = resource ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to save resource");
      }

      router.push("/admin/resources");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="border-white/10 bg-slate-900">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">
                Title *
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!resource) setSlug(generateSlug(e.target.value));
                }}
                placeholder="Resource title"
                className="border-white/10 bg-slate-800 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug" className="text-white">
                Slug
              </Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="resource-slug"
                className="border-white/10 bg-slate-800 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type" className="text-white">
                Type *
              </Label>
              <Select
                value={type}
                onValueChange={(v) => setType(v as ResourceType)}
              >
                <SelectTrigger className="border-white/10 bg-slate-800 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-slate-800">
                  {resourceTypes.map((t) => (
                    <SelectItem
                      key={t.value}
                      value={t.value}
                      className="text-white hover:bg-slate-700"
                    >
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-white">
                Category
              </Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger className="border-white/10 bg-slate-800 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-slate-800">
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat.id}
                      value={cat.id}
                      className="text-white hover:bg-slate-700"
                    >
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="url" className="text-white">
              URL *
            </Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="border-white/10 bg-slate-800 text-white placeholder:text-gray-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the resource"
              className="border-white/10 bg-slate-800 text-white placeholder:text-gray-500"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags" className="text-white">
              Tags (comma-separated)
            </Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, typescript, ui"
              className="border-white/10 bg-slate-800 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="featured"
              checked={featured}
              onCheckedChange={setFeatured}
            />
            <Label htmlFor="featured" className="text-white">
              Featured resource
            </Label>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading
                ? "Saving..."
                : resource
                ? "Update Resource"
                : "Create Resource"}
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
