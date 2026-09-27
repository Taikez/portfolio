import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { MotionSection } from "../ui/MotionSection";

export function ShamelessPlugSection() {
  const plugProject = PROJECTS.find((p) => p.shamelessPlug);

  if (!plugProject) return null;

  return (
    <MotionSection className="py-16 border-b border-border" delay={0.2}>
      <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 rounded-2xl border border-accent/30 bg-accent/5">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 p-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

        <div className="z-10 mb-6 md:mb-0 md:max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/80 text-white font-semibold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Product</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">
            Care to test your thinking patterns?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            I'm actively building <strong>{plugProject.title}</strong>—
            {plugProject.tagline.toLowerCase()} Take a free online assessment to
            see it in action.
          </p>
        </div>

        <div className="z-10 shrink-0 w-full md:w-auto">
          {/* Replace href with your actual live product URL */}
          <a
            href={plugProject.links.at(0)?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors shadow-sm"
          >
            Try the Assessment <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
