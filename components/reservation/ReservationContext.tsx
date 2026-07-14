"use client";

import { createContext, useContext } from "react";

export type ReservationContextValue = {
  isOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
};

export const ReservationContext = createContext<ReservationContextValue | null>(null);

export function useReservation(): ReservationContextValue {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
