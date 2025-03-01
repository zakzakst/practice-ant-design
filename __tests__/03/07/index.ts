export const wait = (duration: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
};

export const timeout = (duration: number): Promise<number> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
};
