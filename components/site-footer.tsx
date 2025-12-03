import Link from "next/link";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Icons.layers className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl">DevKit</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your ultimate developer resource hub for APIs, templates, tools,
              and more.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/categories"
                  className="hover:text-foreground transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-foreground transition-colors"
                >
                  All Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=api"
                  className="hover:text-foreground transition-colors"
                >
                  APIs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=template"
                  className="hover:text-foreground transition-colors"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">More</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/resources?type=tool"
                  className="hover:text-foreground transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=ui-component"
                  className="hover:text-foreground transition-colors"
                >
                  UI Components
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=tutorial"
                  className="hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=library"
                  className="hover:text-foreground transition-colors"
                >
                  Libraries
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-foreground transition-colors"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
