import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Button } from "@/components/ui/Button";
import { privateDiningDetails } from "@/lib/data/private-dining";

export function PrivateDiningTeaser() {
  return (
    <section id="private-dining" className="relative scroll-mt-24 overflow-hidden">
      <ImageWithFallback
        src="/images/private-dining.png"
        alt="The private dining room at Ember House"
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-near-black via-near-black/70 to-near-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-near-black/40" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-[1500px] items-center px-6 py-28 lg:px-12">
        <div className="max-w-xl">
          <RevealText>
            <SectionLabel>Private Dining</SectionLabel>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              Your table.
              <br />
              Your evening.
            </h2>
          </RevealText>
          <RevealText delay={0.18}>
            <p className="prose-measure mt-8 font-sans text-base leading-relaxed text-warm-grey">
              An intimate private room for celebrations, business dinners and evenings designed
              around your guests.
            </p>
          </RevealText>

          <RevealText delay={0.26}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brass/15 pt-8 sm:max-w-md">
              {privateDiningDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-sans text-[0.65rem] tracking-[0.2em] text-brass uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-sm text-bone/90">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </RevealText>

          <RevealText delay={0.34}>
            <Button href="/private-dining" variant="outline" className="mt-10">
              Discover Private Dining
            </Button>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
