import type { Articles } from "./type";

const handleResponse = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
};

export const getMyArticles = (): Promise<Articles> => {
  return fetch(host("/my/articles")).then(handleResponse);
};
