import type React from "react";
import {
  Globe,
  FileCode,
  Wrench,
  Layout,
  BookOpen,
  Package,
  Search,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Star,
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Moon,
  Sun,
  Home,
  Layers,
  Settings,
  MessageSquare,
  ArrowLeft,
  Filter,
  Tag,
  Github,
  Zap,
  Database,
  Code2,
  Smartphone,
  BarChart3,
  Palette,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  Cpu,
  GitBranch,
  Boxes,
  TestTube,
} from "lucide-react";

export const Icons = {
  globe: Globe,
  fileCode: FileCode,
  wrench: Wrench,
  layout: Layout,
  bookOpen: BookOpen,
  package: Package,
  search: Search,
  menu: Menu,
  x: X,
  chevronRight: ChevronRight,
  externalLink: ExternalLink,
  star: Star,
  plus: Plus,
  pencil: Pencil,
  trash: Trash2,
  logOut: LogOut,
  moon: Moon,
  sun: Sun,
  home: Home,
  layers: Layers,
  settings: Settings,
  messageSquare: MessageSquare,
  arrowLeft: ArrowLeft,
  filter: Filter,
  tag: Tag,
  github: Github,
  zap: Zap,
  database: Database,
  code2: Code2,
  smartphone: Smartphone,
  barChart3: BarChart3,
  palette: Palette,
  alertCircle: AlertCircle,
  checkCircle: CheckCircle,
  clock: Clock,
  users: Users,
  cpu: Cpu,
  gitBranch: GitBranch,
  boxes: Boxes,
  testTube: TestTube,
};

export function getCategoryIcon(iconName: string | null) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe: Icons.globe,
    FileCode: Icons.fileCode,
    Wrench: Icons.wrench,
    Layout: Icons.layout,
    BookOpen: Icons.bookOpen,
    Package: Icons.package,
  };
  return iconMap[iconName || ""] || Icons.layers;
}

/**
 * Get icon for resource type by converting type name to icon name
 * Converts kebab-case and snake_case to camelCase and tries to match with available icons
 * Falls back to a default icon if no match is found
 */
export function getResourceTypeIcon(
  typeName: string | null
): React.ComponentType<{ className?: string }> {
  if (!typeName) return Icons.package;

  // Convert kebab-case and snake_case to camelCase
  const normalized = typeName
    .toLowerCase()
    .replace(/[-_]([a-z0-9])/g, (_, char) => char.toUpperCase());

  // Map specific type names to icons
  const typeIconMap: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    api: Icons.globe,
    template: Icons.layout,
    tool: Icons.wrench,
    uiComponent: Icons.palette,
    tutorial: Icons.bookOpen,
    library: Icons.package,
    database: Icons.database,
    framework: Icons.code2,
    mobile: Icons.smartphone,
    analytics: Icons.barChart3,
    plugin: Icons.zap,
    component: Icons.boxes,
    test: Icons.testTube,
    documentation: Icons.fileCode,
    utility: Icons.wrench,
    extension: Icons.zap,
    integration: Icons.gitBranch,
    service: Icons.cpu,
    ui: Icons.palette,
  };

  return typeIconMap[normalized] || Icons.package;
}
