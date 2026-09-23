// components/sections/hero.tsx
import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 border-b border-border">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-12">
        {/* Left Column: Hero Text */}
        <div className="flex-1 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {SITE_CONFIG.title}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-foreground/90 mb-4 leading-snug">
            {SITE_CONFIG.positioning}
          </p>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed">
            {SITE_CONFIG.bioShort}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              View Projects
            </Link>
            <a
              href={SITE_CONFIG.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-surface text-foreground font-medium text-sm hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <FileText className="w-4 h-4 text-muted-foreground" />
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="shrink-0">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-border bg-muted">
            <Image
              src="/images/avatar.png"
              alt={`Headshot of ${SITE_CONFIG.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 144px, 176px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
