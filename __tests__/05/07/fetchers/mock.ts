import * as Fetchers from ".";
import { httpError, postMyAddressMock } from "./fixtures";

export const mockPostMyAddress = (status: number = 201) => {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyAddress")
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, "postMyAddress")
    .mockResolvedValueOnce(postMyAddressMock);
};
