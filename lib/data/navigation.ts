export type NavLink = {
  label: string;
  href: string;
};

/** Anchor links for the single-page scrolling experience. */
export const navigation: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Visit", href: "#visit" },
];
