export const generateRandomUUID = () => {
  return crypto.randomUUID();
};

export const createArray = (count: number, fill: number = 0) => {
  return new Array(count).fill(fill);
};
