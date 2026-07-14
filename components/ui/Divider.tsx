import { cn } from "@/lib/utils";

/** A fine brass rule used to separate editorial content. */
export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-t border-brass/25", className)} aria-hidden="true" />;
}
