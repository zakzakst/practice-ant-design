import { getTodoTitle } from ".";
import * as Api from "./api";

jest.mock("./api");

test("getTodoTitle はモックされた API のデータを使う", async () => {
  jest.spyOn(Api, "fetchData").mockResolvedValue({ title: "Learn Jest" });
  const title = await getTodoTitle();
  expect(title).toBe("Learn Jest");
  expect(Api.fetchData).toHaveBeenCalledTimes(1);
});
