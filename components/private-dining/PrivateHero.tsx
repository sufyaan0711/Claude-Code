"use client";

import { motion } from "motion/react";
import { EASE_EDITORIAL } from "@/lib/animation";

/** `media` is rendered by the server-component page and passed in — see Hero.tsx. */
export function PrivateHero({ media }: { media: React.ReactNode }) {
  return (
    <section className="relative flex h-[80vh] min-h-[520px] items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_EDITORIAL }}
      >
        {media}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/50 to-near-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-16 lg:px-12 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.15 }}
          className="font-sans text-xs tracking-[0.3em] text-brass uppercase"
        >
          Private Dining
        </motion.p>
        <h1 className="mt-6 max-w-2xl overflow-hidden">
          <motion.span
            className="block font-serif text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: EASE_EDITORIAL, delay: 0.3 }}
          >
            A room of your own.
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.8 }}
          className="prose-measure mt-8 font-sans text-base leading-relaxed text-bone/90 sm:text-lg"
        >
          Private dining at Ember House is shaped around the table, the menu and the people
          gathered around it.
        </motion.p>
      </div>
    </section>
  );
}
