import { AboutPreviewSection } from "@/components/sections/AboutPreview";
import { ExperienceSection } from "@/components/sections/Experience";
import { HeroSection } from "@/components/sections/Hero";
import { LatestWritingSection } from "@/components/sections/LatestWriting";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjects";
import { ShamelessPlugSection } from "@/components/sections/ShamelessPlug";
import { SkillsSection } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <div id="projects">
        <SelectedProjectsSection />
      </div>
      <ShamelessPlugSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutPreviewSection />
      <LatestWritingSection />
    </div>
  );
}
