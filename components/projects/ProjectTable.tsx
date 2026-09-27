import { Project } from "@/lib/projects";
import { ProjectTableRow } from "./ProjectTableRow";

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800/80 text-xs font-semibold uppercase tracking-wider text-slate-400 pb-4">
            <th className="py-4 pr-4 w-24">Year</th>
            <th className="py-4 px-4 w-1/4">Project</th>
            <th className="py-4 px-4 w-1/5">Made at / Role</th>
            <th className="py-4 px-4">Built with</th>
            <th className="py-4 pl-4 text-right">Link</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50 text-sm">
          {projects.map((project) => (
            <ProjectTableRow key={project.slug} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
