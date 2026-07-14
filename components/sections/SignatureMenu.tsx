import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { MenuItem } from "./MenuItem";
import { menu } from "@/lib/data/menu";

export function SignatureMenu() {
  return (
    <section id="menu" className="scroll-mt-24 bg-near-black py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <RevealText>
            <SectionLabel>Signatures</SectionLabel>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              From the fire.
            </h2>
          </RevealText>
          <RevealText delay={0.18}>
            <p className="mt-6 font-sans text-base text-warm-grey">
              A short selection from the Ember House kitchen.
            </p>
          </RevealText>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-y-14 sm:gap-x-8 lg:mt-20 lg:gap-x-10 lg:gap-y-16">
          {menu.map((item, index) => (
            <RevealText key={item.id} delay={Math.min(index * 0.06, 0.3)} className={item.gridSpan}>
              <MenuItem item={item} />
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.1}>
          <p className="mt-16 font-sans text-xs text-warm-grey italic lg:mt-20">
            Our menu changes with the seasons and availability of ingredients.
          </p>
        </RevealText>
      </div>
    </section>
  );
}
