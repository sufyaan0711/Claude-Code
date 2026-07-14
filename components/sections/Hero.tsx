"use client";

import { motion } from "motion/react";
import { ReserveButton } from "@/components/reservation/ReserveButton";
import { EASE_EDITORIAL } from "@/lib/animation";
import { restaurant } from "@/lib/data/restaurant";

const headingLines = ["STEAK.", "FIRE.", "YORKSHIRE."];

/**
 * `media` is rendered by the (server-component) page and passed in, rather
 * than imported here — ImageWithFallback uses node:fs for its existence
 * check, which can only run in a Server Component.
 */
export function Hero({ media }: { media: React.ReactNode }) {
  return (
    <section className="relative flex h-[100dvh] min-h-[640px] items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_EDITORIAL }}
      >
        {media}
      </motion.div>

      {/* Dark directional overlay with a very subtle oxblood warmth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/55 to-near-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-oxblood/25 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-6 pb-20 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.1 }}
              className="font-sans text-xs tracking-[0.3em] text-brass uppercase"
            >
              {restaurant.shortName} · Batley
            </motion.p>

            <h1 className="mt-6 font-serif text-[3.4rem] leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              {headingLines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: EASE_EDITORIAL,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.75 }}
              className="prose-measure mt-8 font-sans text-base leading-relaxed text-bone/90 sm:text-lg"
            >
              Dry-aged British beef, seasonal produce and considered cooking over open flame.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.95 }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <ReserveButton />
              <a
                href="#menu"
                className="font-sans text-xs tracking-[0.14em] text-cream/90 uppercase underline decoration-brass/0 underline-offset-4 transition-all duration-300 hover:text-brass hover:decoration-brass/60"
              >
                View Signatures
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 1.15 }}
        className="absolute right-6 bottom-8 z-10 hidden flex-col items-center gap-3 sm:flex lg:right-12"
        aria-hidden="true"
      >
        <span className="h-14 w-px bg-gradient-to-b from-transparent via-cream/40 to-transparent" />
        <span className="font-sans text-[0.6rem] tracking-[0.3em] text-cream/60 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
