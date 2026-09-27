import { Project } from "@/lib/projects";
import { ProjectMobileCard } from "./ProjectMobileCard";

export function ProjectMobileList({ projects }: { projects: Project[] }) {
  return (
    <div className="block md:hidden space-y-8">
      {projects.map((project) => (
        <ProjectMobileCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
