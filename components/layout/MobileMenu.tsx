"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { ReserveButton } from "@/components/reservation/ReserveButton";
import { navigation } from "@/lib/data/navigation";
import { restaurant } from "@/lib/data/restaurant";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { EASE_EDITORIAL } from "@/lib/animation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap({ isOpen, onClose, containerRef });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[90] flex flex-col bg-near-black lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Logo size="sm" showSub={false} href="/" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-warm-grey/20 text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Primary">
            {navigation.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.08 * index }}
                className="border-b border-warm-grey/10 py-4 font-serif text-4xl text-cream transition-colors duration-300 hover:text-brass"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <ReserveButton className="w-full" />
            <div className="mt-8 space-y-1 font-sans text-sm text-warm-grey">
              <a href={restaurant.phone.href} className="block hover:text-brass">
                {restaurant.phone.display}
              </a>
              <p>{restaurant.locality}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
