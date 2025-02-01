import { ROUTES } from "../lib/constants";
import type { Utility } from "../lib/definitions";

export const utilityData: Utility[] = [
  {
    id: "ul-1",
    label: "Time Duration Calculator",
    description:
      "Calculate the duration between two times in years, months, hours, and minutes.",
    href: ROUTES.TIME_DURATION_CALLCULATOR,
  },
  {
    id: "ul-2",
    label: "Random ID Generator",
    description:
      "Generate pseudo-random numbers using v4 UUIDs (Universally Unique Identifiers).",
    href: ROUTES.RANDOM_ID_GENERATOR,
  },
];
