import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small uppercase eyebrow label with a fine brass rule — used to open every section. */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-brass/60" />
      {children}
    </span>
  );
}
