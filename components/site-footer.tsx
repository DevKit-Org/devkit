import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="w-full px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/main-logo.png"
                alt="DevKit"
                width={120}
                height={80}
                className="rounded-sm"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Your ultimate developer resource hub for APIs, templates, tools,
              and more. Built to help developers build better, faster.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com/DevKit-Org"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Github className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=api"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  APIs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=template"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">More</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/resources?type=tool"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=ui-component"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UI Components
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=tutorial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/resources?type=library"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Libraries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DevKit. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
