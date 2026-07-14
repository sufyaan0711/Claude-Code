import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Divider } from "@/components/ui/Divider";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function IntroSection() {
  return (
    <section className="relative bg-near-black py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6">
            <RevealText>
              <SectionLabel>Wood-Fired Dining · West Yorkshire</SectionLabel>
            </RevealText>

            <RevealText delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
                Built around fire,
                <br />
                produce <em className="text-brass italic">and</em> patience.
              </h2>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="prose-measure mt-8 font-sans text-base leading-relaxed text-warm-grey">
                Ember House brings modern wood-fired cooking to Batley. British beef, seasonal
                vegetables and carefully sourced ingredients are prepared over flame with a focus
                on depth, balance and simplicity.
              </p>
            </RevealText>

            <Divider className="my-10 max-w-[10rem]" />

            <RevealText delay={0.25}>
              <p className="prose-measure font-serif text-xl leading-snug text-bone/90 italic">
                No theatre for theatre’s sake. Just good produce, proper fire and considered
                hospitality.
              </p>
            </RevealText>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <RevealText delay={0.15} className="h-full">
              <ImageWithFallback
                src="/images/intro-detail.jpg"
                alt="Detail of open flame and seasoning at Ember House"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
