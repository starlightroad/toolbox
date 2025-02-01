export const generateRandomUUID = () => {
  return crypto.randomUUID();
};

export const createArray = (count: number, fill: number = 0) => {
  return new Array(count).fill(fill);
};

export const createURLDownloadLink = (data: string) => {
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  return url;
};
