import { fetchData } from "./api";

export const getTodoTitle = async () => {
  const data = await fetchData();
  return data.title;
};
