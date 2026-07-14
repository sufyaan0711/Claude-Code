export type PrivateDiningDetail = {
  label: string;
  value: string;
};

export const privateDiningDetails: PrivateDiningDetail[] = [
  { label: "Capacity", value: "Up to 18 guests" },
  { label: "Menu", value: "Bespoke seasonal menus" },
  { label: "Hosting", value: "Dedicated hosting" },
  { label: "Availability", value: "Wednesday to Sunday" },
];

export type PrivateMenuCourse = {
  course: string;
  description: string;
};

export const privateDiningMenu: PrivateMenuCourse[] = [
  { course: "Arrival", description: "Warm sourdough, cultured butter and smoked salt" },
  { course: "Starter", description: "Coal-roasted scallop, celeriac and apple" },
  { course: "Main", description: "Dry-aged sirloin, charred onion and beef jus" },
  { course: "Dessert", description: "Burnt honey tart and cultured cream" },
];

export const privateDiningOccasions = [
  "Birthday",
  "Anniversary",
  "Business dinner",
  "Celebration",
  "Other",
] as const;
