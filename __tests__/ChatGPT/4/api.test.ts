import { fetchData } from "./api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: "Mocked Todo" }),
  })
) as jest.Mock;

test("fetchData がモックされた fetch を使用する", async () => {
  const data = await fetchData();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(data.title).toBe("Mocked Todo");
});
