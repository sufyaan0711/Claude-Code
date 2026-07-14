"use client";

import { Button } from "@/components/ui/Button";
import { useReservation } from "./ReservationContext";
import { cn } from "@/lib/utils";

type ReserveButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children?: React.ReactNode;
};

/** "Reserve a Table" trigger — opens the reservation panel from anywhere in the site. */
export function ReserveButton({ variant = "primary", className, children }: ReserveButtonProps) {
  const { openPanel } = useReservation();

  return (
    <Button variant={variant} onClick={openPanel} className={cn(className)}>
      {children ?? "Reserve a Table"}
    </Button>
  );
}
