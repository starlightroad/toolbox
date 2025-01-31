import type { Unit } from "./definitions";

export const pluralize = (unit: Unit, count: number) => {
  return count > 0 && count !== 1 ? `${unit}s` : unit;
};

export const getDateInDateStringFormat = () => new Date().toDateString();

export const createDate = (date: string) => new Date(date);
