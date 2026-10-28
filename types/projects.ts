export type ProjectLink = {
  label: string;
  url: string;
  type: "live" | "github" | string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  technologies: string[];
  date: string;
  role: string;
  links: ProjectLink[];
  overview?: string;
  problem?: string;
  constraints?: string[];
  approach?: string;
  keyDecisions?: string[];
  outcome?: string;
  lessonsLearned?: string[];
  images?: Array<{ src: string; alt: string; caption?: string }>;
};
