/**
 * Shared animation configuration. Every scroll reveal, hover and panel
 * transition in the site pulls from these tokens so motion feels like one
 * calm, consistent system rather than ad-hoc per-component tuning.
 */

export const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.9,
  hero: 1.1,
} as const;

export const REVEAL_DISTANCE = 22;

/** Standard "fade + rise" reveal, used for headings, copy and small groups. */
export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_EDITORIAL },
  },
};

/** Viewport config shared by scroll-reveal elements — fires once, slightly
 * before the element is fully in view, so reveals feel anticipatory rather
 * than late. */
export const VIEWPORT_ONCE = { once: true, margin: "-10% 0px -10% 0px" } as const;

/** Stagger helper for groups of a few elements (labels, buttons, list items). */
export function staggerChildren(step = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step, delayChildren },
    },
  };
}
