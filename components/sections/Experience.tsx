"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCES } from "@/lib/experience";
import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";

export function ExperienceSection() {
  // Sort experiences by startDate descending (newest first)
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  // Track scroll progress within this specific section
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress (0 to 1) to a CSS height percentage
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <MotionSection
      className="py-20 md:py-32 border-b border-border"
      delay={0.2}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <SectionHeader title="My career & experience" />
      </div>

      <div ref={containerRef} className="relative mt-16 max-w-6xl mx-auto">
        {/* The Static Background Line (Center on desktop, Left on mobile) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2" />

        {/* The Animated Glowing Line */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-[2px] md:w-[3px] bg-gradient-to-b from-transparent via-accent to-accent md:-translate-x-1/2 origin-top z-10"
          style={{ height: lineHeight }}
        >
          {/* The Glowing Dot at the tip of the line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-accent shadow-[0_0_20px_var(--color-accent)]" />
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {sortedExperiences.map((item) => {
            // Formatting the date string to be identical for both views
            const displayDate = `${item.startDate} — ${item.endDate}`;

            return (
              <div
                key={item.id}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-start group"
              >
                {/* Mobile Dot Marker (Hidden on Desktop) */}
                <div className="absolute left-4 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-surface-muted border border-border md:hidden z-0 group-hover:border-accent transition-colors" />

                {/* Left Column: Role & Company */}
                <div className="pl-12 md:pl-0 md:text-right pt-1 md:pt-0 flex flex-col md:items-end">
                  {/* Company Logo */}
                  {item.logo && (
                    <div className="relative w-12 h-12 mb-4 rounded-xl overflow-hidden border border-border/50 bg-surface shadow-sm shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-muted-foreground mt-2">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground hover:underline transition-colors"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>

                  {/* Mobile-only date display so context isn't lost */}
                  <span className="md:hidden block mt-2 text-xs font-mono text-accent/80 font-semibold tracking-wider uppercase">
                    {displayDate}
                  </span>
                </div>

                {/* Center Column: Full Date Label on Timeline */}
                <div className="hidden md:flex flex-col items-center justify-start z-20">
                  <div className="bg-background py-4 px-2">
                    {/* Scaled down to text-sm and added whitespace-nowrap so the full string fits nicely */}
                    <span className="text-sm font-mono font-bold tracking-widest text-foreground/80 group-hover:text-accent transition-colors uppercase whitespace-nowrap drop-shadow-sm">
                      {displayDate}
                    </span>
                  </div>
                </div>

                {/* Right Column: Description & Highlights */}
                <div className="pl-12 md:pl-0 pt-1 md:pt-2">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
