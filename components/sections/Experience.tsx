import { EXPERIENCES } from "@/lib/experience";
import { MotionSection } from "../ui/MotionSection";

export function ExperienceSection() {
  return (
    <MotionSection className="py-16 border-b border-border" delay={0.2}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
        Work Experience
      </h2>

      <div className="space-y-10">
        {EXPERIENCES.map((item) => (
          <div key={item.id} className="relative pl-6 border-l-2 border-border">
            <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {item.role}{" "}
                <span className="text-muted-foreground font-normal">
                  @{" "}
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                {item.startDate} — {item.endDate}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              {item.description}
            </p>

            <ul className="list-disc list-inside text-sm text-foreground/90 space-y-1.5 mb-3">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
