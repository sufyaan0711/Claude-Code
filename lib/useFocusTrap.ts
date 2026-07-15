"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

type UseFocusTrapOptions = {
  isOpen: boolean;
  onClose: () => void;
  containerRef: RefObject<HTMLElement | null>;
};

/**
 * Shared accessible-overlay behaviour: locks body scroll while open, traps
 * Tab focus within the container, closes on Escape, and returns focus to
 * the element that was focused before the overlay opened.
 */
export function useFocusTrap({ isOpen, onClose, containerRef }: UseFocusTrapOptions): void {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    const focusableElements = container?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const first = focusableElements?.[0];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      // A nested popup (e.g. a Radix Select dropdown) that has already
      // handled this key — closing itself and calling preventDefault in
      // its own capture-phase listener — should not also close us.
      if (event.defaultPrevented) return;

      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !container) return;

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose, containerRef]);
}
