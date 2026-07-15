"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useIsTabletUp } from "@/lib/useIsTabletUp";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

type ExpandingStoryProps = {
  /** Fills the animated (scroll-linked) frame — sized via `h-full w-full`. */
  media: React.ReactNode;
  /** Fills the static frame (mobile, and desktop under reduced motion) —
   * carries its own responsive aspect ratio, see app/page.tsx. */
  reducedMotionMedia: React.ReactNode;
};

/**
 * The site's central visual moment. At 768px and above, with motion
 * allowed, the image widens and its corners sharpen as the visitor scrolls
 * through a short pinned track — scroll-linked, not trigger-once. Below
 * 768px, and under prefers-reduced-motion at any width, the pin is skipped
 * entirely: the image sits in normal document flow at a comfortable,
 * near-full-width size with only a brief reveal animation, so mobile
 * visitors are never stuck scrolling through a tall empty section.
 *
 * Both `media` props are rendered by the server-component page and passed
 * in — see Hero.tsx for why. Motion's useScroll recalculates its offsets
 * on resize/layout changes internally, so no manual refresh wiring is
 * needed here.
 */
export function ExpandingStory({ media, reducedMotionMedia }: ExpandingStoryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isTabletUp = useIsTabletUp();
  const expansionEnabled = isTabletUp && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  // Roughly half the previous scroll distance (120vh vs 260vh) and the
  // animation now runs across most of that shorter pin, so it completes
  // in well under half the previous scroll — and wall-clock time.
  const width = useTransform(scrollYProgress, [0, 0.6], ["72%", "94%"]);
  const radius = useTransform(scrollYProgress, [0, 0.6], [24, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.05, 1]);

  return (
    <section id="story" className="relative bg-near-black py-20 lg:py-32">
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

      {expansionEnabled ? (
        <div ref={trackRef} className="relative my-8 h-[120vh] lg:my-10">
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
      ) : (
        <div className="mx-auto my-12 w-[92%] max-w-[1400px] sm:my-16">
          <RevealText>
            <div className="relative overflow-hidden rounded-[10px]">{reducedMotionMedia}</div>
          </RevealText>
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
