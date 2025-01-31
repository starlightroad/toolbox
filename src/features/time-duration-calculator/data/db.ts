import type { Units } from "../lib/definitions";

const units: Units = {
  milliseconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

export const getUnits = (): Units => {
  return units;
};
