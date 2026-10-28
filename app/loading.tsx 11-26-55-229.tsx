// app/loading.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Loading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative flex h-12 w-12 items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-accent opacity-20"
          />
          {/* Inner pulsating core */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-3 w-3 rounded-full bg-accent"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Compiling
        </motion.p>
      </motion.div>
    </div>
  );
}
