import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Target, Hammer, Brain, Rocket } from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title: "About",
  description:
    "I am a highly efficient, pragmatic software developer who thrives in fast-paced environments, eliminating unnecessary complexity to build strong, scalable foundations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I am a software developer who focuses on building useful things well.
          I believe in simple architecture, shipping quickly, and eliminating
          unnecessary complexity.
        </p>
      </header>

      <div className="space-y-16 text-base md:text-lg leading-relaxed text-foreground/90">
        {/* Professional Story & Approach */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
            My Engineering Approach
          </h2>
          <p className="mb-4">
            I don't believe in over-engineering for problems that don't exist
            yet. My focus is always on the user and the business outcome.
            Whether I am structuring a database or designing a user interface,
            my goal is to find the most efficient path from a problem to a
            working, reliable solution.
          </p>
        </section>

        {/* The Vitademy Cognitive Profile Section */}
        <section className="p-8 rounded-2xl border border-accent/20 bg-accent/5">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold tracking-tight text-foreground m-0">
              How I Think & Work
            </h2>
          </div>

          <p className="text-sm md:text-base text-foreground/80 mb-8">
            According to my cognitive assessment on{" "}
            <strong>
              <Link
                href="https://www.vitademy.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 hover:underline transition-colors"
              >
                Vitademy
              </Link>
            </strong>
            , my working style is defined by a unique combination of speed,
            pragmatism, and independent action. I am a highly efficient
            pragmatic builder: I move quickly under pressure, eliminate bloat,
            and solve problems through practical action.
          </p>

          <div className="space-y-8">
            {/* Status Group */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                Status Group <span className="font-mono text-xs">(N-S-I)</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-accent/20 p-1.5 rounded-md text-white">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-base">
                      Energized by Challenge
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      I dislike slow, stable environments. I require stimulation
                      and perform at my absolute best when facing tight
                      deadlines or crisis-level urgency.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-accent/20 p-1.5 rounded-md text-white">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-base">
                      Extreme Efficiency (Satisficing)
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      To me, the best solution is the one that wastes the least
                      effort. I prioritize eliminating unnecessary complexity.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-accent/20 p-1.5 rounded-md text-white">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-base">
                      Internal Judgment
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      I rely entirely on my own judgment to solve problems,
                      bypassing the need for lengthy brainstorming sessions or
                      bureaucratic approval.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Structure Group */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                Structure Group{" "}
                <span className="font-mono text-xs">(En-Bd)</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-accent/20 p-1.5 rounded-md text-white">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-base">
                      Direct Action (Enactive & Building)
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      I learn fastest through physical experimentation and trial
                      and error rather than reading instructions. From these
                      experiences, I gradually build and refine systems step by
                      step, creating incredibly strong foundations as I go.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trade-offs & Adaptability Section */}
        <section className="p-8 rounded-2xl border border-border bg-surface mt-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
            The Trade-offs (And How I Adapt)
          </h2>
          <p className="text-sm md:text-base text-foreground/80 mb-8">
            Every working style has its trade-offs. Because I prioritize speed,
            efficiency, and direct action, I have to be intentional about
            managing my blind spots in a team setting. Here is how I balance my
            natural tendencies:
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            {/* Communication */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground border-b border-border pb-2">
                Pacing & Communication
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The challenge:
                </strong>{" "}
                I tend to dive deep into a problem and can move from A to Z
                quickly, which sometimes leaves stakeholders wondering about my
                progress.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The adaptation:
                </strong>{" "}
                I proactively use async tools (like Linear, Jira, or brief Slack
                updates) to leave a breadcrumb trail of my work. This keeps
                managers informed without requiring me to break my focus for
                unnecessary meetings.
              </p>
            </div>

            {/* Polish vs Function */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground border-b border-border pb-2">
                Function Over Form
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The challenge:
                </strong>{" "}
                I care deeply that the "engine works." Because of this, I can
                sometimes prioritize getting a functional prototype out the door
                over perfecting the aesthetic details.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The adaptation:
                </strong>{" "}
                I build in a strict "polish phase" at the end of my workflows,
                and I actively seek out feedback from design-focused peers to
                ensure the final product feels as good as it functions.
              </p>
            </div>

            {/* Bureaucracy */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground border-b border-border pb-2">
                Process & Autonomy
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The challenge:
                </strong>{" "}
                I thrive in high-trust environments and can lose momentum if
                bogged down by heavy bureaucracy, lengthy consensus meetings, or
                multi-layered approvals.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground/90 font-medium">
                  The adaptation:
                </strong>{" "}
                I focus on building trust early by delivering reliable results.
                When process is necessary, I focus on understanding the "why"
                behind it, ensuring we are solving the actual business need
                rather than just checking boxes.
              </p>
            </div>
          </div>
        </section>

        {/* Current Focus / Outro */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
            Current Focus
          </h2>
          <p>
            Right now, I am focused on building full-stack applications with
            Next.js, PostgreSQL and Spring Boot as my backend stack, refining my
            product thinking, and actively developing platforms that solve
            real-world problems.
          </p>
        </section>
      </div>

      {/* Footer Navigation */}
      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-white transition-colors"
        >
          See my work in action <ArrowRight className="w-4 h-4" />
        </Link>
      </footer>
    </article>
  );
}
