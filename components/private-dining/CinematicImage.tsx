import { RevealText } from "@/components/ui/RevealText";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function CinematicImage() {
  return (
    <section className="bg-near-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <RevealText>
          <ImageWithFallback
            src="/images/private-table.png"
            alt="A table set for private dining at Ember House"
            className="aspect-[21/9] w-full"
            sizes="100vw"
          />
        </RevealText>
      </div>
    </section>
  );
}
