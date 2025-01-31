import { utilityData } from "./db";

export const fetchAllUtilities = () => {
  return utilityData;
};

export const fetchUtilityById = (id: string) => {
  const utility = utilityData.find((utility) => utility.id === id);

  return utility ?? null;
};
