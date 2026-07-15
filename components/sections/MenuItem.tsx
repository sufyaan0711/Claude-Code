import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { MenuItem as MenuItemType } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

export function MenuItem({ item }: { item: MenuItemType }) {
  if (item.featured) {
    return (
      <article className="group">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={item.image.src}
            alt={item.image.alt}
            className={cn(
              item.aspect,
              "w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            )}
            imageClassName="object-center"
            sizes="100vw"
          />
          {/* Desktop only: the image doubles as a banner with the title,
              price and description overlaid at the bottom. On mobile the
              same content renders as a normal stacked card below instead
              (a 21:9 banner crop reads as a thin, cropped strip at phone
              widths), so this gradient + overlay stay hidden there. */}
          <div className="absolute inset-0 hidden bg-gradient-to-t from-near-black/90 via-near-black/25 to-transparent transition-colors duration-500 group-hover:from-oxblood/60 lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden flex-col gap-2 p-6 sm:p-10 lg:flex">
            <span className="font-sans text-xs tracking-[0.2em] text-brass">{item.number}</span>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-serif text-3xl text-cream transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
                {item.name}
              </h3>
              <span className="font-serif text-2xl text-brass transition-colors duration-300 group-hover:text-cream sm:text-3xl">
                {item.price}
              </span>
            </div>
            <p className="max-w-md font-sans text-sm text-bone/80 sm:text-base">
              {item.description}
            </p>
            <span
              aria-hidden="true"
              className="mt-3 h-px w-12 bg-brass/60 transition-all duration-500 group-hover:w-24"
            />
          </div>
        </div>

        {/* Mobile/tablet only: title, price and description as a normal
            card below the image, consistent with the other dishes. */}
        <div className="mt-5 lg:hidden">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-brass">
                {item.number}
              </span>
              <h3 className="mt-1 font-serif text-2xl text-cream">{item.name}</h3>
            </div>
            <span className="shrink-0 font-serif text-xl text-brass">{item.price}</span>
          </div>
          <p className="mt-2 font-sans text-sm text-warm-grey">{item.description}</p>
          <span aria-hidden="true" className="mt-4 block h-px w-8 bg-brass/50" />
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={item.image.src}
          alt={item.image.alt}
          className={cn(
            item.aspect,
            "w-full transition-transform duration-700 ease-out group-hover:scale-105"
          )}
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-near-black/10 transition-colors duration-500 group-hover:bg-oxblood/15" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-sans text-[0.65rem] tracking-[0.2em] text-brass">
            {item.number}
          </span>
          <h3 className="mt-1 font-serif text-xl text-cream transition-transform duration-300 group-hover:translate-x-1">
            {item.name}
          </h3>
        </div>
        <span className="shrink-0 font-serif text-lg text-brass transition-colors duration-300 group-hover:text-cream">
          {item.price}
        </span>
      </div>
      <p className="mt-2 max-w-xs font-sans text-sm text-warm-grey">{item.description}</p>
      <span
        aria-hidden="true"
        className="mt-4 block h-px w-8 bg-brass/50 transition-all duration-500 group-hover:w-16"
      />
    </article>
  );
}
