// components/sections/skills.tsx
"use client";

import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiGit,
  SiFigma,
  SiSpring,
} from "react-icons/si";
import { FaJava, FaLaravel } from "react-icons/fa";

// Grouping skills by practical purpose as required by the PRD
const TECH_CATEGORIES = [
  {
    title: "Frontend & Core",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, hover: "group-hover:text-white" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        hover: "group-hover:text-blue-400",
      },
      { name: "React", icon: SiReact, hover: "group-hover:text-cyan-400" },
      {
        name: "JavaScript",
        icon: SiJavascript,
        hover: "group-hover:text-yellow-400",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        hover: "group-hover:text-cyan-300",
      },
      { name: "Java", icon: FaJava, hover: "group-hover:text-red-300" },
      { name: "Laravel", icon: FaLaravel, hover: "group-hover:text-red-500" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        hover: "group-hover:text-green-500",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        hover: "group-hover:text-blue-300",
      },
      { name: "Python", icon: SiPython, hover: "group-hover:text-blue-500" },
      { name: "Spring", icon: SiSpring, hover: "group-hover:text-green-400" },
    ],
  },
  {
    title: "Infra & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, hover: "group-hover:text-blue-500" },
      { name: "Git", icon: SiGit, hover: "group-hover:text-orange-500" },
      { name: "Figma", icon: SiFigma, hover: "group-hover:text-pink-400" },
    ],
  },
];

export function SkillsSection() {
  return (
    <MotionSection
      className="relative py-20 md:py-28 border-b border-border overflow-hidden"
      delay={0.2}
    >
      {/* Deep Background Glow mimicking the reference image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mb-16 text-center">
        <SectionHeader title="My Tech Stack" />
        <p className="text-muted-foreground text-lg md:text-xl font-medium mt-4">
          Core technologies and practical workflows I use to ship products.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl flex flex-col gap-12">
        {TECH_CATEGORIES.map((category, catIdx) => (
          <div key={category.title} className="flex flex-col items-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
              {category.title}
            </h3>

            {/* Centered Flex layout creates the staggered honeycomb/bento look automatically */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl md:rounded-3xl border border-border/50 bg-surface/40 backdrop-blur-md hover:bg-surface hover:border-accent/40 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <skill.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground transition-colors duration-300 ${skill.hover} mb-3`}
                  />
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground/80 tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
