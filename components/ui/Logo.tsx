import Link from "next/link";
import { restaurant } from "@/lib/data/restaurant";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "cream" for dark backgrounds (default), "near-black" for light ones. */
  variant?: "cream" | "near-black";
  size?: "sm" | "md" | "lg";
  href?: string;
  showSub?: boolean;
  className?: string;
};

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-sm sm:text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-4xl sm:text-6xl",
};

/**
 * The Ember House wordmark: an all-capitals, letter-spaced typographic
 * mark with no icon, monogram or symbol — rendered as real text so it
 * stays crisp, selectable and themeable at every size.
 */
export function Logo({
  variant = "cream",
  size = "md",
  href = "/",
  showSub = true,
  className,
}: LogoProps) {
  const textColor = variant === "cream" ? "text-cream" : "text-near-black";
  const subColor = variant === "cream" ? "text-warm-grey" : "text-slate";

  return (
    <Link
      href={href}
      className={cn("inline-flex flex-col items-start", className)}
      aria-label={`${restaurant.name} — home`}
    >
      <span
        className={cn(
          "font-serif uppercase leading-none tracking-[0.16em]",
          sizeClasses[size],
          textColor
        )}
      >
        {restaurant.shortName}
      </span>
      {showSub && (
        <span
          className={cn(
            "mt-2 font-sans text-[0.6rem] uppercase tracking-[0.26em] sm:text-[0.65rem]",
            subColor
          )}
        >
          {restaurant.wordmarkSub}
        </span>
      )}
    </Link>
  );
}
