"use client";

import { useCallback, useMemo, useState } from "react";
import { MotionConfig } from "motion/react";
import { ReservationContext, type ReservationContextValue } from "./ReservationContext";
import { ReservationPanel } from "./ReservationPanel";

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPanel = useCallback(() => setIsOpen(true), []);
  const closePanel = useCallback(() => setIsOpen(false), []);

  const value = useMemo<ReservationContextValue>(
    () => ({ isOpen, openPanel, closePanel }),
    [isOpen, openPanel, closePanel]
  );

  return (
    <ReservationContext.Provider value={value}>
      {/* reducedMotion="user" makes every Motion animation in the app
          automatically respect prefers-reduced-motion without per-component
          checks — scroll-linked transforms are guarded separately. */}
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5 }}>
        {children}
        <ReservationPanel />
      </MotionConfig>
    </ReservationContext.Provider>
  );
}
