# Image Guide

Real photography and the hero video are included in `/public/images` and
`/public/videos`. Every image slot still renders a tasteful dark
placeholder (via `ImageWithFallback`) if its file is ever missing — the
site never breaks, and layouts never shift, because every placeholder
holds the same aspect ratio the real photo uses.

Filenames are lowercase and case-sensitive. Everything else (captions, alt
text, layout, aspect ratios) is already wired up to these exact paths.

## Photography style

For a consistent, high-end result across all images:

- Warm, directional lighting with deep shadows
- Realistic food styling — no over-processed HDR
- Dark wood and black or stone tableware
- Controlled highlights, minimal props
- No visible branding, logos or text in the photograph itself
- Consistent colour grading across every image (keep a shared warm/oxblood tone)

## File list and recommended dimensions

| File | Orientation | Minimum size | Used in |
|---|---|---|---|
| `intro-detail.png` | Portrait | 1200 × 1600 | Introduction section detail image |
| `dish-bone-marrow.png` | Landscape | 1400px shortest side | Signature menu |
| `dish-beetroot.png` | Portrait | 1400px shortest side | Signature menu |
| `dish-ribeye.png` | Landscape (wide) | 1400px shortest side | Signature menu — dominant item |
| `dish-lamb.png` | Square | 1400px shortest side | Signature menu |
| `dish-maitake.png` | Portrait | 1400px shortest side | Signature menu |
| `dish-honey-tart.png` | Square | 1400px shortest side | Signature menu |
| `story-wide.png` | Landscape | 2400 × 1500 | Expanding scroll-story image |
| `fire-detail.png` | Portrait or landscape | 1800px shortest side | Fire philosophy section |
| `private-dining.png` | Landscape | 2000 × 1400 | Private dining teaser (homepage) |
| `private-hero.png` | Landscape | 2000px wide | Private dining page hero |
| `private-room.png` | Portrait | 2000px wide | Private dining page, room details |
| `private-table.png` | Landscape (wide) | 2000px wide | Private dining page, cinematic image |
| `reservation-background.png` | Landscape | 2200 × 1400 | Final reservation call-to-action |

## Hero video

The homepage hero uses a video instead of a static image.

| | |
|---|---|
| File | `hero.mp4` |
| Type | Landscape video |
| Recommended resolution | 1920 × 1080 |
| Location | `/public/videos/hero.mp4` |
| Used in | Homepage cinematic hero |
| Recommended format | MP4 using H.264 |
| Recommended behaviour | Muted, autoplay, loop and `playsInline` |

The video is rendered with a plain HTML `<video>` element (not `next/image`)
so it can autoplay, loop and stay muted with no controls. On desktop, with
motion allowed, it sits in a cinematic scroll-linked frame that expands
toward full width as the visitor scrolls (see `components/sections/Hero.tsx`);
on mobile or under `prefers-reduced-motion` it simply fills a normal
full-height hero instead.

## How the fallback works

`components/ui/ImageWithFallback.tsx` checks whether each file exists on
disk on the server (via `fs.existsSync`), so a missing photo never causes a
failed network request in the browser — it renders a dark placeholder in
the same box instead, with the expected filename shown faintly in
development only (never in production). Add or replace a file at the
matching path and rebuild — no code changes required.
