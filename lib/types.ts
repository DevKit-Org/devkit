export type ResourceType =
  | "api"
  | "template"
  | "tool"
  | "ui-component"
  | "tutorial"
  | "library";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  type: ResourceType;
  description: string | null;
  url: string;
  image_url: string | null;
  tags: string[];
  category_id: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
  category?: Category;
}

export interface ContactMessage {
  id: string;
  name: string | null;
  email: string;
  message: string;
  created_at: string;
}
