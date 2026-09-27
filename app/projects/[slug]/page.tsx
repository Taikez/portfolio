import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import GitHubIcon from "@/icons/Github";

// Generate static routes at build time for performance
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the params Promise here
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Back Navigation */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm mb-8">
          {project.role && (
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-foreground">Role</span>
              <span className="text-muted-foreground">{project.role}</span>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground">Timeline</span>
            <span className="text-muted-foreground font-mono">
              {project.date}
            </span>
          </div>
        </div>

        {/* Links & Technologies */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-3">
            {project.links?.map((link) => {
              // Assuming you add `isPrivate: true` to your github link object in your data
              const isPrivateRepo = link.type === "github" && link.isPrivate;

              if (isPrivateRepo) {
                return (
                  <span
                    key="private-repo"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface-muted text-muted-foreground text-sm font-medium rounded-md border border-border cursor-not-allowed"
                    title="Source code is private"
                  >
                    <GitHubIcon className="w-4 h-4 opacity-50" />
                    Private Code
                  </span>
                );
              }

              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                >
                  {link.type === "github" ? (
                    <GitHubIcon className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {project.images && project.images.length > 0 && (
        <figure className="mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          {project.images[0].caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {project.images[0].caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Case Study Content */}
      <div className="space-y-12 text-base md:text-lg leading-relaxed text-foreground/90">
        {project.overview && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Overview
            </h2>
            <p>{project.overview}</p>
          </section>
        )}

        {project.problem && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              The Problem
            </h2>
            <p>{project.problem}</p>
          </section>
        )}

        {project.constraints && project.constraints.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Constraints & Requirements
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-muted-foreground">
              {project.constraints.map((constraint, idx) => (
                <li key={idx}>{constraint}</li>
              ))}
            </ul>
          </section>
        )}

        {project.approach && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              The Approach
            </h2>
            <p>{project.approach}</p>
          </section>
        )}

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Key Decisions
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-muted-foreground">
              {project.keyDecisions.map((decision, idx) => (
                <li key={idx}>{decision}</li>
              ))}
            </ul>
          </section>
        )}

        {project.outcome && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              The Outcome
            </h2>
            <p>{project.outcome}</p>
          </section>
        )}

        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Lessons Learned
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-muted-foreground">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx}>{lesson}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer Navigation */}
      <footer className="mt-20 pt-8 border-t border-border flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all projects
        </Link>
      </footer>
    </article>
  );
}
