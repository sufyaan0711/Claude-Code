import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { privateDiningDetails } from "@/lib/data/private-dining";

export function RoomDetails() {
  return (
    <section className="bg-near-black py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-6">
            <RevealText>
              <SectionLabel>The Room</SectionLabel>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="mt-8 font-serif text-3xl leading-[1.1] text-cream sm:text-4xl">
                Set apart, without leaving the fire behind.
              </h2>
            </RevealText>
            <RevealText delay={0.18}>
              <p className="prose-measure mt-6 font-sans text-base leading-relaxed text-warm-grey">
                The room seats up to eighteen, framed by the same dark timber and open kitchen as
                the main dining room — private enough for the evening to feel like your own,
                without losing what makes Ember House itself.
              </p>
            </RevealText>

            <RevealText delay={0.26}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-brass/15 pt-8 sm:max-w-md">
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
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <RevealText delay={0.15}>
              <ImageWithFallback
                src="/images/private-room.jpg"
                alt="The Ember House private dining room set for a group"
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
