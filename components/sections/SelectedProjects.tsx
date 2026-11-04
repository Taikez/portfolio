"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getFeaturedProjects } from "@/lib/projects";
import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";
import SectionSubHeader from "../ui/SectionSubHeader";

gsap.registerPlugin(ScrollTrigger);

export function SelectedProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollAmount = () => {
          const lastCard = track.lastElementChild as HTMLElement | null;

          if (!lastCard) return 0;

          const currentX = Number(gsap.getProperty(track, "x")) || 0;

          const lastCardRight =
            lastCard.getBoundingClientRect().right - currentX;

          const viewportRight = viewport.getBoundingClientRect().right;

          return Math.max(0, Math.ceil(lastCardRight - viewportRight));
        };

        gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    }, section);

    // Recalculate after layout and image loading.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <MotionSection
      ref={sectionRef}
      className="py-16 md:py-20 border-b border-border overflow-hidden"
      delay={0.1}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <SectionHeader title="Things I've built" />
          <SectionSubHeader
            text="Focusing on impact, user experience, and clean technical
            architecture."
          />
        </div>

        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors pb-1 border-b-2 border-foreground/20 hover:border-foreground"
        >
          View projects archive
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal Scroll Track */}
      <div ref={viewportRef} className="relative w-full overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-6 md:gap-8 pb-12">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                group
                shrink-0
                w-[85vw]
                sm:w-[400px]
                md:w-[450px]
                lg:w-[500px]
                flex flex-col justify-between
                p-6 md:p-8
                rounded-3xl
                border border-border/50
                bg-surface-muted/20
                hover:bg-surface-muted/60
                transition-colors
                shadow-sm hover:shadow-md
              "
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl md:text-5xl font-black text-foreground/20 group-hover:text-accent/60 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <span className="text-xs md:text-sm font-medium text-muted-foreground">
                    {project.date}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Tools and features
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.technologies.join(", ")}
                </p>
              </div>

              {project.images && project.images.length > 0 && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-surface shadow-inner mt-auto">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 500px"
                  />
                </div>
              )}
            </Link>
          ))}
          <Link
            href="/projects"
            className="
              group
              shrink-0
              w-[85vw]
              sm:w-[400px]
              md:w-[450px]
              lg:w-[500px]
              min-h-full
              flex flex-col items-center justify-center
              text-center
              p-8 md:p-12
              rounded-3xl
              border border-border/50
              bg-surface-muted/20
              hover:bg-surface-muted/60
              transition-all duration-300
              shadow-sm hover:shadow-md
            "
          >
            <div className="max-w-sm">
              <h3
                className="
                  text-3xl md:text-4xl
                  font-bold
                  text-foreground
                  mb-6
                  transition-colors
                  group-hover:text-accent
                "
              >
                Want to see more?
              </h3>

              <p
                className="
                  text-base
                  text-muted-foreground
                  leading-relaxed
                  mb-10
                "
              >
                Explore all of my projects and creations.
              </p>

              <span
                className="
                  inline-flex items-center gap-2
                  px-8 py-4
                  rounded-full
                  bg-accent
                  text-accent-foreground
                  font-semibold
                  transition-all duration-300
                  group-hover:gap-4
                  group-hover:shadow-lg
                "
              >
                See All Projects
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-4 text-center sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground"
        >
          View projects archive
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MotionSection>
  );
}
