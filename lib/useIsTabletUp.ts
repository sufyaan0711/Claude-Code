"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(min-width: 768px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** True at 768px and above (Tailwind's `md` breakpoint) — gates the story section's scroll expansion. */
export function useIsTabletUp(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
