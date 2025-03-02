import { getTodoTitle } from ".";
import * as Api from "./api";

jest.mock("./api");

test("spyOn で API 関数の呼び出しを監視する", async () => {
  const spy = jest
    .spyOn(Api, "fetchData")
    .mockResolvedValue({ title: "Mock Title" });
  const title = await getTodoTitle();
  expect(title).toBe("Mock Title");
  expect(spy).toHaveBeenCalledTimes(1);
});
