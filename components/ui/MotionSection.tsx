"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, className = "", delay = 0 }, ref) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
      return (
        <section ref={ref} className={className}>
          {children}
        </section>
      );
    }

    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.section>
    );
  },
);
