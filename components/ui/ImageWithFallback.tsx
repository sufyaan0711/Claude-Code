import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  /** Applied to the aspect-ratio wrapper — control size/aspect here. */
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/** True if the given /public-relative path exists on disk at build/render time. */
function imageExists(publicSrc: string): boolean {
  try {
    const relative = publicSrc.replace(/^\/+/, "");
    return fs.existsSync(path.join(process.cwd(), "public", relative));
  } catch {
    return false;
  }
}

/**
 * Wraps next/image so a missing photograph never breaks the page. Real
 * photography files are not included in this demo — see IMAGE-GUIDE.md.
 * Existence is checked on the server (no failed network request is ever
 * issued for a missing file), so until a real photo is added, a tasteful
 * dark placeholder renders in the same aspect ratio, with the expected
 * filename shown only in development. Add the file and rebuild — no code
 * changes required.
 */
export function ImageWithFallback({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}: ImageWithFallbackProps) {
  if (!imageExists(src)) {
    const filename = src.split("/").pop();
    return (
      <div
        className={cn(
          "texture-wood-grain relative flex items-center justify-center overflow-hidden bg-charcoal",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-soft-black via-charcoal to-near-black" />
        {process.env.NODE_ENV === "development" && (
          <span className="relative z-10 px-4 text-center font-sans text-[0.65rem] tracking-[0.2em] text-warm-grey uppercase">
            {filename}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
