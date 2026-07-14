# Image Guide

This project ships without real photography. Every image slot renders a
tasteful dark placeholder (via `ImageWithFallback`) until you add the file —
the site never breaks, and layouts never shift, because every placeholder
holds the same aspect ratio the real photo will use.

Add your own photographs to `/public/images` using the **exact filenames**
below (all lowercase, `.jpg`). Filenames are the only thing that needs to
match — everything else (captions, alt text, layout) is already wired up.

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
| `hero.jpg` | Landscape | 2400 × 1600 | Homepage hero, full-bleed |
| `intro-detail.jpg` | Portrait | 1200 × 1600 | Introduction section detail image |
| `dish-bone-marrow.jpg` | Landscape | 1400px shortest side | Signature menu |
| `dish-beetroot.jpg` | Portrait | 1400px shortest side | Signature menu |
| `dish-ribeye.jpg` | Landscape (wide) | 1400px shortest side | Signature menu — dominant item |
| `dish-lamb.jpg` | Square | 1400px shortest side | Signature menu |
| `dish-maitake.jpg` | Portrait | 1400px shortest side | Signature menu |
| `dish-honey-tart.jpg` | Square | 1400px shortest side | Signature menu |
| `story-wide.jpg` | Landscape | 2400 × 1500 | Expanding scroll-story image |
| `fire-detail.jpg` | Portrait or landscape | 1800px shortest side | Fire philosophy section |
| `private-dining.jpg` | Landscape | 2000 × 1400 | Private dining teaser (homepage) |
| `private-hero.jpg` | Landscape | 2000px wide | Private dining page hero |
| `private-room.jpg` | Portrait | 2000px wide | Private dining page, room details |
| `private-table.jpg` | Landscape (wide) | 2000px wide | Private dining page, cinematic image |
| `reservation-background.jpg` | Landscape | 2200 × 1400 | Final reservation call-to-action |

## How the fallback works

`components/ui/ImageWithFallback.tsx` wraps `next/image`. If a file 404s,
the component swallows the error and renders a dark placeholder in the same
box instead of a broken image icon. In development only, the expected
filename is shown faintly in the placeholder so it is obvious what to add
and where — this hint is never shown in production.

Once you add a real file at the matching path, it replaces the placeholder
automatically — no code changes required.
