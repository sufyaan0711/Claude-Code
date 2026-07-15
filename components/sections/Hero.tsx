"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ReserveButton } from "@/components/reservation/ReserveButton";
import { EASE_EDITORIAL } from "@/lib/animation";
import { restaurant } from "@/lib/data/restaurant";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

const headingLines = ["STEAK.", "FIRE.", "YORKSHIRE."];
const HERO_POSTER = "/images/hero-poster.jpg";

/**
 * Muted, looping background video with a still-image fallback layer.
 *
 * Mobile browsers (iOS Safari in particular) sometimes ignore the JSX
 * `muted`/`autoPlay` attributes on the very first server-rendered paint —
 * a known gap between the HTML attribute and the DOM property that a
 * purely client-side remount (e.g. navigating away and back) doesn't hit,
 * which matches the "only works after visiting another page" symptom.
 * Setting `.muted`/`.defaultMuted`/`.playsInline` imperatively via a ref
 * before calling `.play()` closes that gap, and retrying on
 * `loadedmetadata`/`canplay` (not just on mount) covers the case where the
 * browser can't attempt playback yet because the video hasn't buffered
 * enough to autoplay on the very first attempt. The poster stays visible —
 * and the browser never gets a chance to show its own "blocked autoplay"
 * play button — until the video actually fires `playing`; if autoplay is
 * refused outright, the poster simply stays up.
 */
function HeroVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — the poster layer stays visible, no error surfaced.
        });
      }
    };

    attemptPlay();

    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") attemptPlay();
    };
    const handlePageShow = () => attemptPlay();

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative
          fallback layer under a video; next/image's fill mode adds
          overhead this tiny crossfade doesn't need */}
      <img
        src={HERO_POSTER}
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-10 h-full w-full object-cover object-center transition-opacity duration-700 ease-out",
          isPlaying ? "opacity-0" : "opacity-100"
        )}
      />
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 z-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out",
          isPlaying ? "opacity-100" : "opacity-0"
        )}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
    </div>
  );
}

function HeroOverlay() {
  return (
    <>
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-t from-near-black via-near-black/55 to-near-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-oxblood/25 via-transparent to-transparent" />
    </>
  );
}

function HeroContent() {
  return (
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
  );
}

function ScrollIndicator() {
  return (
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
  );
}

/**
 * Cinematic hero: a full-bleed autoplaying video. On desktop, with motion
 * allowed, the video sits in a slightly inset, rounded "framed" container
 * that smoothly expands to full-bleed as the visitor scrolls through a
 * tall track behind a sticky viewport — mirroring the technique used by
 * ExpandingStory. On mobile or under prefers-reduced-motion, the track is
 * skipped entirely and the video simply fills a normal full-height hero.
 */
export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  const expansionEnabled = isDesktop && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["90%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.04, 1]);

  if (!expansionEnabled) {
    return (
      <section className="relative flex h-[100dvh] min-h-[640px] items-end overflow-hidden bg-near-black">
        <HeroVideo className="absolute inset-0 h-full w-full" />
        <HeroOverlay />
        <HeroContent />
        <ScrollIndicator />
      </section>
    );
  }

  return (
    <section ref={trackRef} className="relative h-[180vh] bg-near-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ width, borderRadius: radius }}
          className="relative mx-auto h-full overflow-hidden bg-near-black"
        >
          <motion.div style={{ scale }} className="relative h-full w-full">
            <HeroVideo className="relative h-full w-full" />
          </motion.div>
          <HeroOverlay />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
          <div className="pointer-events-auto">
            <HeroContent />
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
