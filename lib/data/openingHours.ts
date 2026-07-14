export type OpeningHoursEntry = {
  days: string;
  hours: string;
};

/** Fictional demonstration hours — see README for details. */
export const openingHours: OpeningHoursEntry[] = [
  { days: "Wednesday", hours: "5:00 PM – 10:30 PM" },
  { days: "Thursday", hours: "5:00 PM – 10:30 PM" },
  { days: "Friday", hours: "5:00 PM – 11:00 PM" },
  { days: "Saturday", hours: "12:00 PM – 11:00 PM" },
  { days: "Sunday", hours: "12:00 PM – 9:00 PM" },
  { days: "Monday & Tuesday", hours: "Closed" },
];

/** Fictional available reservation time slots. */
export const reservationTimes: string[] = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

export const maxStandardPartySize = 8;

export const partySizes: number[] = Array.from({ length: maxStandardPartySize }, (_, i) => i + 1);
