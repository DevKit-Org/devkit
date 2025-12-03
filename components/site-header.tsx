"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { SearchCommand } from "@/components/search-command";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "/categories", label: "Categories" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full text-white transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="w-full flex h-16 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/main-logo.png"
            alt="DevKit"
            width={130}
            height={80}
            className="rounded-sm"
          />
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-md font-medium transition-colors hover:text-white/80",
                pathname === item.href ? "text-white" : "text-white/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* GitHub Link */}{" "}
          <Link
            href="https://github.com/DevKit-Org"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Icons.github className="h-4 w-4" />
          </Link>
          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className="hidden md:flex bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/40 text-white rounded-full px-5 py-2 text-sm font-medium transition-all"
          >
            <Link href="/resources">
              Get Started
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <Icons.x className="h-5 w-5 text-white" />
            ) : (
              <Icons.menu className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md pt-1 pb-4">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-full"
              >
                <Link href="/resources">
                  Get Started
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
