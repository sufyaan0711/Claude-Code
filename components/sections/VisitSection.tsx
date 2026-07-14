import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { restaurant } from "@/lib/data/restaurant";
import { openingHours } from "@/lib/data/openingHours";

/**
 * All address, phone, email and opening-hours details on this page are
 * fictional demonstration content for the Ember House concept — see
 * README.md for the same note.
 */
export function VisitSection() {
  return (
    <section
      id="visit"
      className="texture-wood-grain relative scroll-mt-24 bg-wood py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <RevealText>
          <SectionLabel>Visit</SectionLabel>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="mt-8 max-w-xl font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
            Find us in Batley.
          </h2>
        </RevealText>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-brass/15 pt-14 sm:grid-cols-3 lg:mt-20 lg:gap-16 lg:pt-16">
          <RevealText delay={0.05}>
            <h3 className="font-sans text-[0.68rem] tracking-[0.2em] text-brass uppercase">
              Address
            </h3>
            <address className="mt-4 font-serif text-xl leading-relaxed text-cream not-italic">
              {restaurant.address.line1}
              <br />
              {restaurant.address.line2}
              <br />
              {restaurant.address.line3}
              <br />
              {restaurant.address.postcode}
            </address>
            <button
              type="button"
              disabled
              aria-label="Get directions — demonstration placeholder, not linked to a real map"
              className="mt-6 inline-flex cursor-not-allowed items-center gap-2 border border-warm-grey/20 px-6 py-3 font-sans text-xs tracking-[0.14em] text-warm-grey/50 uppercase"
            >
              Get Directions
            </button>
            <p className="mt-3 font-sans text-xs text-warm-grey">
              Illustrative for this demonstration.
            </p>
          </RevealText>

          <RevealText delay={0.12}>
            <h3 className="font-sans text-[0.68rem] tracking-[0.2em] text-brass uppercase">
              Contact
            </h3>
            <div className="mt-4 space-y-2 font-sans text-lg text-cream">
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
            </div>
          </RevealText>

          <RevealText delay={0.19}>
            <h3 className="font-sans text-[0.68rem] tracking-[0.2em] text-brass uppercase">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-warm-grey">
              {openingHours.map((entry) => (
                <li
                  key={entry.days}
                  className="flex justify-between gap-6 border-b border-brass/10 pb-2"
                >
                  <span className="text-bone/90">{entry.days}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
