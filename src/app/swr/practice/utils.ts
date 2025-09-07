export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getQueryStr = (params: Record<string, string | number>): string => {
  // undefinedの値を除外
  const filteredParams = Object.entries(params).filter(([, value]) => value !== undefined);
  const query = new URLSearchParams(
    filteredParams.reduce(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {} as Record<string, string>,
    ),
  );
  const result = Array.from(query.entries()).length ? `?${query.toString()}` : "";
  return result;
};
