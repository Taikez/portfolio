// lib/skills.ts
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3 / Tailwind CSS", "SQL"],
  },
  {
    category: "Frontend Frameworks & UI",
    skills: [
      "Next.js (App Router)",
      "React",
      "Framer Motion",
      "Web Accessibility (WCAG)",
    ],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "PostgreSQL", "Prisma ORM", "REST APIs", "GraphQL"],
  },
  {
    category: "Tooling & Infrastructure",
    skills: [
      "Git / GitHub",
      "Docker",
      "Vercel",
      "Jest / Vitest",
      "CI/CD Pipelines",
    ],
  },
];
