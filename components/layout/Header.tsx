"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ReserveButton } from "@/components/reservation/ReserveButton";
import { MobileMenu } from "./MobileMenu";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          isScrolled
            ? "border-brass/15 bg-near-black/90 backdrop-blur-md"
            : "border-cream/10 bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 lg:px-12",
            isScrolled ? "py-4" : "py-6 lg:py-8"
          )}
        >
          <Logo size="sm" showSub={false} className="min-w-0 shrink lg:hidden" />
          <Logo size="md" showSub className="hidden lg:flex" />

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-[0.14em] text-cream/85 uppercase transition-colors duration-300 hover:text-brass"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ReserveButton />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ReserveButton variant="outline" className="px-3 py-2 text-[0.6rem] whitespace-nowrap">
              Reserve
            </ReserveButton>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-cream/20 text-cream"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.25" />
                <line x1="0" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.25" />
                <line x1="0" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
