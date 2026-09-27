import { ProjectMobileList } from "@/components/projects/ProjectMobileList";
import { ProjectTable } from "@/components/projects/ProjectTable";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsArchivePage() {
  return (
    <main className="min-h-screen bg-[#0a0d14] text-slate-300 px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mb-4 group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1 mr-1">
            ←
          </span>{" "}
          Back to home
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-12">
          All Projects
        </h1>

        {/* Desktop Table View */}
        <ProjectTable projects={PROJECTS} />

        {/* Mobile View */}
        <ProjectMobileList projects={PROJECTS} />
      </div>
    </main>
  );
}
