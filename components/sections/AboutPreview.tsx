import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "../ui/MotionSection";

export function AboutPreviewSection() {
  return (
    <MotionSection className="py-16 border-b border-border" delay={0.4}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
        Engineering Approach
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
        I value code clarity, minimal dependencies, and user-centric decision
        making. Software should be straightforward to build, simple to navigate,
        fast to load, and robust under real-world network conditions.
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
        Whether designing API schemas or building fluid UI layouts, I prioritize
        strong alignment, accessible markup, and durable performance.
      </p>
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
      >
        Read more about my background & values{" "}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </MotionSection>
  );
}
