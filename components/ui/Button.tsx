"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  "aria-label"?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: undefined;
  type?: undefined;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "border border-brass bg-brass text-near-black px-7 py-3.5 hover:bg-transparent hover:text-brass",
  outline:
    "border border-brass/40 text-cream px-7 py-3.5 hover:border-brass hover:bg-brass/10",
  ghost:
    "text-cream/90 hover:text-brass gap-2 underline-offset-4 decoration-brass/0 hover:decoration-brass/60 hover:underline",
};

/** Shared button styling — small uppercase text, brass borders, restrained hover. */
export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
      aria-label={props["aria-label"]}
    >
      {children}
    </button>
  );
}
