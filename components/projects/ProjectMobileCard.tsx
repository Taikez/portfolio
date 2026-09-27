import { Project } from "@/lib/projects";
import Link from "next/link";
import { TechBadge } from "../ui/TechBadge";
import { ExternalLink } from "./ExternalLink";

export function ProjectMobileCard({ project }: { project: Project }) {
  const year = project.date.split("-")[0];
  const primaryLink =
    project.links.find((l) => l.type === "live") || project.links[0];

  return (
    <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/60 space-y-3">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{year}</span>
        <span className="font-medium text-slate-400">{project.role}</span>
      </div>

      <h2 className="text-lg font-semibold text-slate-100">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>

      <p className="text-xs text-slate-400 leading-relaxed">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      {primaryLink && (
        <div className="pt-2">
          <ExternalLink link={primaryLink} />
        </div>
      )}
    </div>
  );
}
