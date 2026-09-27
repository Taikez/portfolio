"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ActivityBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-border bg-surface-muted/30 backdrop-blur-sm shadow-sm"
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        {/* Outer rotating ring - scaled down */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-[1.5px] border-muted-foreground/40"
        />
        {/* Inner pulsating core - scaled down */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-foreground"
        />
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Ready to Build
      </span>
    </motion.div>
  );
}
