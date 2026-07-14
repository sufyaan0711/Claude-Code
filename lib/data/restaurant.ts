/**
 * Central restaurant identity and copy. Ember House is a fictional concept
 * built for this demonstration project — every detail here (address, phone,
 * email, hours) is invented and must not be treated as a real business.
 */

export const restaurant = {
  name: "Ember House",
  shortName: "Ember House",
  wordmarkSub: "WOOD-FIRED STEAKHOUSE · BATLEY",
  tagline: "STEAK. FIRE. YORKSHIRE.",
  description:
    "Ember House is a refined wood-fired steakhouse serving dry-aged British beef, seasonal produce and carefully prepared dishes cooked over open flame.",
  themeColor: "#090909",
  locality: "Batley, West Yorkshire",

  address: {
    line1: "14 Market Yard",
    line2: "Batley",
    line3: "West Yorkshire",
    postcode: "WF17 5DA",
    country: "United Kingdom",
  },

  phone: {
    display: "01924 555 018",
    href: "tel:+441924555018",
  },

  email: {
    display: "hello@emberhouse.co.uk",
    href: "mailto:hello@emberhouse.co.uk",
  },

  social: {
    instagram: "#",
  },
} as const;
