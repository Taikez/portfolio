import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { MotionSection } from "../ui/MotionSection";

export function SelectedProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <MotionSection className="py-16 border-b border-border" delay={0.1}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Selected Projects
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Focusing on impact, user experience, and simple technical
            architecture.
          </p>
        </div>
        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          All projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border bg-surface hover:border-accent/40 transition-colors"
          >
            {/* Visual Preview */}
            {project.images && project.images.length > 0 && (
              <Link
                href={`/projects/${project.slug}`}
                className="shrink-0 overflow-hidden rounded-md border border-border/50 md:w-1/3 bg-muted block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="relative aspect-video w-full h-full min-h-[160px]">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
            )}

            {/* Project Details */}
            <div className="flex flex-col flex-1 justify-center">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <span className="text-xs font-mono text-muted-foreground shrink-0">
                  {project.date}
                </span>
              </div>

              <p className="text-foreground/90 font-medium text-sm mb-3">
                {project.tagline}
              </p>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {project.overview}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline"
                >
                  Read Case Study <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View all projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </MotionSection>
  );
}
