import { SKILL_CATEGORIES } from "@/lib/skills";
import { MotionSection } from "../ui/MotionSection";

export function SkillsSection() {
  return (
    <MotionSection className="py-16 border-b border-border" delay={0.3}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
        Skills & Expertise
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Core technologies and practical workflows I use regularly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-5 rounded-lg border border-border bg-surface"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
