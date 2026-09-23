// lib/experience.ts
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string; // e.g., "2023-01"
  endDate: string | "Present";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Full-Stack Engineer",
    company: "Mayora",
    location: "Indonesia",
    startDate: "2023-04",
    endDate: "Present",
    description:
      "Lead the development of internal applications used by operational teams across Mayora, with a focus on digitizing business processes for overseas factory transactions and local purchasing operations.",
    highlights: [
      "Lead a team of 3 junior developers, providing technical direction, code reviews, mentoring, and support throughout the development lifecycle.",
      "Design and develop in-house applications that support day-to-day operational workflows for internal teams.",
      "Build and maintain systems used to manage transaction processes for overseas factories.",
      "Support local factory purchasing operations by developing tools that improve how purchasing workflows and business data are managed.",
      "Work directly with internal stakeholders to translate operational requirements into practical software solutions.",
      "Contribute across the full development lifecycle, from requirement gathering and system design to implementation, deployment, and maintenance.",
    ],
    technologies: [],
  },
  {
    id: "exp-2",
    role: "Technical Founder & CTO",
    company: "Vitademy",
    companyUrl: "https://vitademy.space",
    startDate: "2024-10",
    endDate: "Present",
    description:
      "Lead the technical direction and development of Vitademy, an education technology platform focused on understanding how people learn and turning those insights into personalized learning experiences.",
    highlights: [
      "Defined the product's technical strategy and architecture, balancing scalability, performance, maintainability, and the needs of the learning experience.",
      "Designed and built the full-stack platform using Next.js, TypeScript, Tailwind CSS, and Prisma ORM.",
      "Designed scalable application and database structures to support learning content across multiple subjects, grades, levels, and creators.",
      "Built responsive and interactive user interfaces using reusable components, dynamic content, animations, and structured user flows.",
      "Implemented authentication, authorization, protected routes, and administrative access using Clerk.",
      "Designed the content and data model used to organize assessments and learning materials while keeping the system flexible for future expansion.",
      "Managed deployment, database infrastructure, and development workflows using Vercel and Prisma.",
      "Collaborate with content creators, designers, and other stakeholders to translate educational concepts into product features.",
      "Mentor junior developers, interns, and volunteers through onboarding, code reviews, technical guidance, and engineering best practices.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Vercel",
    ],
  },
  {
    id: "exp-3",
    role: "Co-Founder",
    company: "Elevance",
    startDate: "2026-05",
    endDate: "Present",
    description:
      "Co-founded a software house focused on helping businesses digitalize their operations through practical websites, internal systems, and custom software solutions.",
    highlights: [
      "Work across both the technical and business sides of the company, from software development and solution design to marketing and client communication.",
      "Design and build digital products based on real business requirements rather than one-size-fits-all solutions.",
      "Work directly with clients to understand existing workflows, identify opportunities for digitalization, and translate them into practical software.",
      "Handle projects across the development lifecycle, including planning, frontend and backend development, deployment, and ongoing improvements.",
      "Contribute to business development, positioning, marketing, and the overall direction of the company alongside my co-founder.",
    ],
    technologies: [],
  },
];
