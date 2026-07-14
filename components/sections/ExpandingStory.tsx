"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

type ExpandingStoryProps = {
  /** Fills the animated (scroll-linked) frame — sized via `h-full w-full`. */
  media: React.ReactNode;
  /** Fills the static, reduced-motion frame — sized via `aspect-video w-full`. */
  reducedMotionMedia: React.ReactNode;
};

/**
 * The site's central visual moment: the image widens and its corners
 * sharpen as the visitor scrolls through a tall track, while a sticky
 * child keeps it centred in the viewport. Scroll-linked, not
 * trigger-once — and skipped entirely under prefers-reduced-motion,
 * where the image renders at a fixed, comfortable width instead.
 *
 * Both `media` props are rendered by the server-component page and passed
 * in — see Hero.tsx for why.
 */
export function ExpandingStory({ media, reducedMotionMedia }: ExpandingStoryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0.1, 0.65], ["68%", "96%"]);
  const radius = useTransform(scrollYProgress, [0.1, 0.65], [28, 3]);
  const scale = useTransform(scrollYProgress, [0.1, 0.65], [1.08, 1]);

  return (
    <section id="story" className="relative bg-near-black py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <RevealText>
            <SectionLabel>Our Story</SectionLabel>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              A room shaped by
              <br />
              warmth and restraint.
            </h2>
          </RevealText>
          <RevealText delay={0.18}>
            <p className="prose-measure mt-8 font-sans text-base leading-relaxed text-warm-grey">
              Ember House was imagined as a place where the food, room and service carry equal
              weight. Dark timber, warm light and an open kitchen create a setting that feels
              intimate without becoming formal.
            </p>
          </RevealText>
        </div>
      </div>

      {reducedMotion ? (
        <div className="mx-auto my-20 w-[86%] max-w-[1400px] lg:my-28">
          <div className="relative overflow-hidden rounded-[10px]">{reducedMotionMedia}</div>
        </div>
      ) : (
        <div ref={trackRef} className="relative my-8 h-[260vh] lg:my-12">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <motion.div
              style={{ width, borderRadius: radius }}
              className="relative overflow-hidden"
            >
              <motion.div style={{ scale }} className="aspect-video w-full">
                {media}
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <RevealText>
            <h2 className="font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              Fire is the starting point,
              <br />
              not the performance.
            </h2>
          </RevealText>
          <RevealText delay={0.12}>
            <p className="prose-measure mt-8 font-sans text-base leading-relaxed text-warm-grey">
              Flame brings colour, texture and depth, but the ingredient remains the focus. The
              menu is built around British produce and cooking that feels confident, direct and
              uncomplicated.
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
