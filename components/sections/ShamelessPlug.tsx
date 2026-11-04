import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";
import SectionSubHeader from "../ui/SectionSubHeader";

export function ShamelessPlugSection() {
  const plugProject = PROJECTS.find((p) => p.shamelessPlug);

  if (!plugProject) return null;

  return (
    <MotionSection
      className="py-20 md:py-28 border-b border-border"
      delay={0.2}
    >
      <SectionHeader title="I own a startup" />
      <SectionSubHeader text="Vitademy is the GPS for the human mind. We map your cognitive architecture so you can navigate the future of learning." />

      <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 rounded-3xl border border-accent/30 shadow-lg mt-8 group">
        {/* Background Image Container */}
        <Image
          src="/images/vitademy-garden.png"
          alt="Vitademy Garden Background"
          fill
          className="object-cover object-center opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent pointer-events-none" />

        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 p-32 bg-accent/20 blur-3xl rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 mb-8 md:mb-0 md:max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-purple-400 font-bold text-[10px] uppercase tracking-widest mb-6 backdrop-blur-md border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Product</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4 drop-shadow-md">
            {plugProject.title}
          </h3>

          <p className="text-foreground font-medium text-lg md:text-xl leading-relaxed mb-4 drop-shadow-md">
            Vitademy operates as an independent research and development lab
            based in Jakarta. We are pioneering a cognitive operating system
            built around our proprietary 5CD framework—mapping exactly how you
            initiate action, sustain engagement, and assimilate new data.
          </p>

          <p className="text-foreground/80 text-base leading-relaxed max-w-lg drop-shadow-sm">
            Learning is highly individual, but most systems treat it as
            one-size-fits-all. I built Vitademy to evaluate how people process
            information and turn those results into practical, personalized
            foundations—without the generic fluff.
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full md:w-auto md:ml-8">
          <a
            href={plugProject.links?.find((l) => l.type === "live")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-foreground/90 transition-transform hover:scale-105 shadow-md"
          >
            Know Your Mind <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
