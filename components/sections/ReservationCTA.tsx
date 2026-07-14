"use client";

import { motion } from "motion/react";
import { ReserveButton } from "@/components/reservation/ReserveButton";
import { RevealText } from "@/components/ui/RevealText";
import { VIEWPORT_ONCE } from "@/lib/animation";

/** `media` is rendered by the server-component page and passed in — see Hero.tsx. */
export function ReservationCTA({ media }: { media: React.ReactNode }) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-28 lg:py-36">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        {media}
      </motion.div>
      <div className="absolute inset-0 bg-near-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-near-black/40" />

      <div className="relative mx-auto max-w-[1500px] px-6 text-center lg:px-12">
        <RevealText>
          <h2 className="font-serif text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Meet us at the fire.
          </h2>
        </RevealText>
        <RevealText delay={0.12}>
          <p className="prose-measure mx-auto mt-6 font-sans text-base text-bone/85">
            Dinner Wednesday to Sunday in the heart of Batley.
          </p>
        </RevealText>
        <RevealText delay={0.22} className="mt-10 flex justify-center">
          <ReserveButton />
        </RevealText>
      </div>
    </section>
  );
}
