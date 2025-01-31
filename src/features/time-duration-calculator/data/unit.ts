import type { Units } from "../lib/definitions";
import { unitsData } from "./db";

export const fetchAllUnits = (): Units => {
  return unitsData;
};
