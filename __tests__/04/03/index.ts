import { getMyProfile } from "./fetchers";

export const getGreet = async () => {
  const data = await getMyProfile();
  if (!data.name) {
    return "Hello, anonymous user!";
  }
  return `Hello, ${data.name}!`;
};
