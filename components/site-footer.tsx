import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="w-full px-4 pt-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/main-logo.png"
                alt="DevKit"
                width={100}
                height={100}
                className="rounded-sm"
              />
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

        <div className="mt-7 border-t border-border py-2 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
