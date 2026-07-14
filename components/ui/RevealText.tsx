"use client";

import { motion } from "motion/react";
import { DURATION, EASE_EDITORIAL, REVEAL_DISTANCE, VIEWPORT_ONCE } from "@/lib/animation";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Small upward fade reveal used for headings, copy and small groups as
 * they enter the viewport. Fires once; respects prefers-reduced-motion
 * via the app-wide MotionConfig.
 */
export function RevealText({ children, delay = 0, className }: RevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: REVEAL_DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: DURATION.slow, ease: EASE_EDITORIAL, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
