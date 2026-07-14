"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

const principles = [
  {
    number: "01",
    title: "British produce",
    description:
      "Carefully sourced beef, vegetables and ingredients selected for quality rather than unnecessary complexity.",
  },
  {
    number: "02",
    title: "Open flame",
    description: "Oak and charcoal are used to build depth, texture and a clean smoky finish.",
  },
  {
    number: "03",
    title: "Seasonal menus",
    description: "The kitchen changes with the produce available throughout the year.",
  },
];

/** `media` is rendered by the server-component page and passed in — see Hero.tsx. */
export function FirePhilosophy({ media }: { media: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  const parallaxEnabled = isDesktop && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallaxEnabled ? [-24, 24] : [0, 0]);

  return (
    <section className="texture-noise relative bg-charcoal py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <RevealText>
            <SectionLabel>The Kitchen</SectionLabel>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              Cooked with purpose.
            </h2>
          </RevealText>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-y-14 lg:mt-20 lg:gap-x-16">
          <div ref={containerRef} className="col-span-12 lg:col-span-6">
            <RevealText delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[6%]">
                  {media}
                </motion.div>
              </div>
            </RevealText>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="divide-y divide-brass/15">
              {principles.map((principle, index) => (
                <RevealText
                  key={principle.number}
                  delay={index * 0.1}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <span className="font-sans text-xs tracking-[0.2em] text-brass">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-cream">{principle.title}</h3>
                  <p className="prose-measure mt-3 font-sans text-sm leading-relaxed text-warm-grey">
                    {principle.description}
                  </p>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
