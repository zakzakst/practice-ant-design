export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export const getMyProfile = (): Promise<Profile> => {
  return fetch("/sample/api").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
};
