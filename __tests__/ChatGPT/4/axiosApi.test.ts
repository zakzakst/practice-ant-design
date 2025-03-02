import axios from "axios";
import { fetchData } from "./axiosApi";

jest.mock("axios");

test("fetchData がモックされた axios を使用する", async () => {
  (axios.get as jest.Mock).mockResolvedValue({
    data: { title: "Mocked Axios Data" },
  });
  const data = await fetchData();

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(data.title).toBe("Mocked Axios Data");
});
