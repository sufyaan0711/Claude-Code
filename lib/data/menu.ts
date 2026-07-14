export type MenuItem = {
  id: string;
  number: string;
  name: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  /** Tailwind column-span classes for the editorial desktop grid. */
  gridSpan: string;
  /** Tailwind aspect-ratio class controlling the image's proportions. */
  aspect: string;
  featured?: boolean;
};

/**
 * A curated sample of six signature dishes — not the full menu. Grid
 * placement is deliberately asymmetric: the ribeye spans the full row and
 * uses a wider aspect ratio so it reads as the dominant dish.
 */
export const menu: MenuItem[] = [
  {
    id: "bone-marrow",
    number: "01",
    name: "Coal-Roasted Bone Marrow",
    description: "Grilled sourdough, parsley and pickled shallot",
    price: "£14",
    image: { src: "/images/dish-bone-marrow.jpg", alt: "Coal-roasted bone marrow with grilled sourdough" },
    gridSpan: "col-span-12 lg:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    id: "beetroot",
    number: "02",
    name: "Charred Heritage Beetroot",
    description: "Whipped goat's curd, smoked walnut and bitter leaves",
    price: "£13",
    image: { src: "/images/dish-beetroot.jpg", alt: "Charred heritage beetroot with whipped goat's curd" },
    gridSpan: "col-span-12 lg:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ribeye",
    number: "03",
    name: "35-Day Dry-Aged Ribeye",
    description: "Bone marrow butter, watercress and beef jus",
    price: "£42",
    image: { src: "/images/dish-ribeye.jpg", alt: "35-day dry-aged ribeye steak with bone marrow butter" },
    gridSpan: "col-span-12",
    aspect: "aspect-[21/9]",
    featured: true,
  },
  {
    id: "lamb",
    number: "04",
    name: "Wood-Roasted Lamb Rump",
    description: "Black garlic, spring greens and rosemary",
    price: "£32",
    image: { src: "/images/dish-lamb.jpg", alt: "Wood-roasted lamb rump with black garlic" },
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    aspect: "aspect-[1/1]",
  },
  {
    id: "maitake",
    number: "05",
    name: "Ember-Roasted Maitake",
    description: "Celeriac, hazelnut and cep sauce",
    price: "£24",
    image: { src: "/images/dish-maitake.jpg", alt: "Ember-roasted maitake mushroom with celeriac" },
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "honey-tart",
    number: "06",
    name: "Burnt Honey Tart",
    description: "Cultured cream and Yorkshire sea salt",
    price: "£10",
    image: { src: "/images/dish-honey-tart.jpg", alt: "Burnt honey tart with cultured cream" },
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    aspect: "aspect-[1/1]",
  },
];
