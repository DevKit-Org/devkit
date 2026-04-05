import * as LucideIcons from "lucide-react";
import type React from "react";

/**
 * Dynamically load any lucide icon by name
 * Supports exact name match and camelCase conversion
 * @param iconName - Icon name from lucide-react (e.g., "Globe", "Zap", "Database")
 * @returns Icon component or null if not found
 */
export function getLucideIcon(
  iconName: string | null
): React.ComponentType<{ className?: string }> | null {
  if (!iconName) return null;

  // Try exact match first
  let icon = (LucideIcons as any)[iconName];
  if (icon) return icon;

  // Try camelCase conversion (for kebab-case or snake_case inputs)
  const camelCase = iconName
    .toLowerCase()
    .replace(/[-_]([a-z0-9])/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase()); // Capitalize first letter

  icon = (LucideIcons as any)[camelCase];
  if (icon) return icon;

  // Try lowercase
  icon = (LucideIcons as any)[iconName.toLowerCase()];
  if (icon) return icon;

  return null;
}

/**
 * Get list of all available lucide icon names
 * Useful for admin UI icon pickers
 */
export function getAvailableLucideIcons(): string[] {
  return Object.keys(LucideIcons).filter(
    (key) => key !== "default" && !key.startsWith("_")
  );
}
