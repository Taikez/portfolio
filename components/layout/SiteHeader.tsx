// components/layout/site-header.tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b px-10">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between">
        {/* Left: Logo */}
        <div className="flex w-full md:w-1/3 justify-between items-center">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.2em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
          >
            {SITE_CONFIG.name}.
          </Link>

          {/* Mobile Toggle (Moved inside left column for mobile structural flow) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex w-1/3 justify-center items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Resume / Theme Toggle placement) */}
        <div className="hidden md:flex w-1/3 justify-end items-center gap-8">
          <a
            href={SITE_CONFIG.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm flex items-center gap-2"
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="border-b border-border bg-background md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-2"
              >
                Resume ↗
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
