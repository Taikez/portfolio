import { Project } from "@/lib/projects";
import Link from "next/link";
import { TechBadge } from "../ui/TechBadge";
import { ExternalLink } from "./ExternalLink";

export function ProjectTableRow({ project }: { project: Project }) {
  const year = project.date.split("-")[0];
  const primaryLink =
    project.links.find((l) => l.type === "live") || project.links[0];

  return (
    <tr className="hover:bg-slate-900/40 transition-colors group">
      <td className="py-4 pr-4 font-mono text-slate-400 text-xs">{year}</td>
      <td className="py-4 px-4 font-semibold text-slate-100 group-hover:text-teal-300 transition-colors">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          {project.title}
        </Link>
      </td>
      <td className="py-4 px-4 text-slate-400">{project.role}</td>
      <td className="py-4 px-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} />
            </li>
          ))}
        </ul>
      </td>
      <td className="py-4 pl-4 text-right">
        <ExternalLink link={primaryLink} />
      </td>
    </tr>
  );
}
