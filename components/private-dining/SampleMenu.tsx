import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { privateDiningMenu } from "@/lib/data/private-dining";

export function SampleMenu() {
  return (
    <section className="texture-noise relative bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-xl">
          <RevealText>
            <SectionLabel>Sample Menu</SectionLabel>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-8 font-serif text-3xl leading-[1.1] text-cream sm:text-4xl">
              A taste of the evening.
            </h2>
          </RevealText>
        </div>

        <div className="mt-14 max-w-2xl divide-y divide-brass/15 border-t border-brass/15 lg:mt-16">
          {privateDiningMenu.map((course, index) => (
            <RevealText key={course.course} delay={index * 0.08}>
              <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="w-32 shrink-0 font-sans text-[0.68rem] tracking-[0.2em] text-brass uppercase">
                  {course.course}
                </span>
                <p className="font-serif text-xl text-cream">{course.description}</p>
              </div>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.1}>
          <p className="mt-10 font-sans text-xs text-warm-grey italic">
            A sample menu only — private dining menus are shaped around your evening.
          </p>
        </RevealText>
      </div>
    </section>
  );
}
