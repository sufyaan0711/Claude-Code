import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { restaurant } from "@/lib/data/restaurant";
import { navigation } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-brass/10 bg-near-black">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <Logo size="md" />

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-[0.14em] text-warm-grey uppercase transition-colors duration-300 hover:text-brass"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-1.5 font-sans text-sm text-warm-grey">
            <address className="not-italic">
              {restaurant.address.line1}, {restaurant.address.line2}
              <br />
              {restaurant.address.line3} {restaurant.address.postcode}
            </address>
            <a
              href={restaurant.phone.href}
              className="block transition-colors duration-300 hover:text-brass"
            >
              {restaurant.phone.display}
            </a>
            <a
              href={restaurant.email.href}
              className="block transition-colors duration-300 hover:text-brass"
            >
              {restaurant.email.display}
            </a>
            <p>Open Wednesday – Sunday</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-brass/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-sans text-xs text-warm-grey">
            <p>&copy; {new Date().getFullYear()} EMBER HOUSE</p>
            <p className="mt-1">Fictional restaurant concept created for demonstration purposes.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-sans text-xs text-warm-grey transition-colors duration-300 hover:text-brass"
            >
              Accessibility
            </Link>
            <Link
              href="#"
              className="font-sans text-xs text-warm-grey transition-colors duration-300 hover:text-brass"
            >
              Privacy
            </Link>
            <a
              href={restaurant.social.instagram}
              aria-label="Ember House on Instagram"
              className="text-warm-grey transition-colors duration-300 hover:text-brass"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
