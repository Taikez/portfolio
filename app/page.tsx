import { AboutPreviewSection } from "@/components/sections/AboutPreview";
import { ExperienceSection } from "@/components/sections/Experience";
import { HeroSection } from "@/components/sections/Hero";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjects";
import { SkillsSection } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <div id="projects">
        <SelectedProjectsSection />
      </div>
      <ExperienceSection />
      <SkillsSection />
      <AboutPreviewSection />
    </div>
  );
}
