import { checkLength } from ".";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";

jest.mock("../fetchers");

const mockPostMyArticle = (input: ArticleInput, status: number = 200) => {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValueOnce({ ...postMyArticleData, ...input });
  } catch {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
};

const inputFactory = (input?: Partial<ArticleInput>) => {
  return {
    tags: ["testing"],
    title: "TypeScript を使ったテストの書き方",
    body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します。",
    ...input,
  };
};

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
  const input = inputFactory();
  const mock = mockPostMyArticle(input);
  const data = await postMyArticle(input);
  expect(data).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
});

test("バリデーションに失敗した場合、reject される", async () => {
  expect.assertions(2);
  const input = inputFactory({ title: "", body: "" });
  const mock = mockPostMyArticle(input);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  });
});

test("データ取得に失敗した場合、reject される", async () => {
  expect.assertions(2);
  const input = inputFactory();
  const mock = mockPostMyArticle(input, 500);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
    expect(mock).toHaveBeenCalled();
  });
});
