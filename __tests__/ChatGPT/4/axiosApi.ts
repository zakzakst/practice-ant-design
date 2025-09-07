import axios from "axios";

export const fetchData = async (): Promise<{ title: string }> => {
  const response = await axios.get<{ title: string }>(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
  return response.data;
};
