export const fetchData = async (): Promise<{ title: string }> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};
