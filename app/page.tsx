import { AboutPreviewSection } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/Contact";
import { ExperienceSection } from "@/components/sections/Experience";
import { HeroSection } from "@/components/sections/Hero";
import { LatestWritingSection } from "@/components/sections/LatestWriting";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjects";
import { ShamelessPlugSection } from "@/components/sections/ShamelessPlug";
import { SkillsSection } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <SelectedProjectsSection />
      <AboutPreviewSection />
      <ShamelessPlugSection />
      <ExperienceSection />
      <LatestWritingSection />
      <ContactSection />
    </div>
  );
}
