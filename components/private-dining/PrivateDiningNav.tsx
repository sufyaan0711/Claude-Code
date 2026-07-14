import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

/** Minimal navigation for the private dining page — just the mark and a way back. */
export function PrivateDiningNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-12 lg:py-8">
        <Logo size="sm" showSub={false} />
        <Link
          href="/"
          className="font-sans text-xs tracking-[0.14em] text-cream/85 uppercase transition-colors duration-300 hover:text-brass"
        >
          ← Back to Ember House
        </Link>
      </div>
    </header>
  );
}
