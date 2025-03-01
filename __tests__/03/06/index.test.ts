test("「真の値」の検証", () => {
  expect(1).toBeTruthy();
  expect("1").toBeTruthy();
  expect(true).toBeTruthy();
  expect(0).not.toBeTruthy();
  expect("").not.toBeTruthy();
  expect(false).not.toBeTruthy();
});

test("「偽の値」の検証", () => {
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).not.toBeFalsy();
  expect("1").not.toBeFalsy();
  expect(true).not.toBeFalsy();
});

test("「null, undefined」の検証", () => {
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeDefined();
});

describe("数値の検証", () => {
  const value = 2 + 2;
  test("検証値は期待値と等しい", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test("検証値は期待値より大きい", () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  });
  test("検証値は期待値より小さい", () => {
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  });
});

test("小数計算は正確ではない", () => {
  expect(0.1 + 0.2).not.toBe(0.3);
});

test("指定の小数点以下n桁までを比較する", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3); // デフォルトは小数点以下2桁
  expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
  expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
});

describe("文字列の検証", () => {
  const str = "こんにちは世界";
  test("検証値は期待値と等しい", () => {
    expect(str).toBe("こんにちは世界");
    expect(str).toEqual("こんにちは世界");
  });
  test("toContain", () => {
    expect(str).toContain("世界");
    expect(str).not.toContain("さようなら");
  });
  test("toMatch", () => {
    expect(str).toMatch(/世界/);
  });
  test("toHaveLength", () => {
    expect(str).toHaveLength(7);
    expect(str).not.toHaveLength(8);
  });
  const obj = { status: 200, message: str };
  test("stringContaining", () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringContaining("世界"),
    });
  });
  test("stringMatching", () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringMatching(/世界/),
    });
  });
});

describe("配列の検証", () => {
  const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];
  test("toContain", () => {
    expect(tags).toContain("Jest");
    expect(tags).toHaveLength(5);
  });
  const article1 = { author: "taro", title: "Testing Next.js" };
  const article2 = { author: "jiro", title: "Storybook play function" };
  const article3 = { author: "hanako", title: "Visual Regression Testing " };
  const articles = [article1, article2, article3];
  test("toContainEqual", () => {
    expect(articles).toContainEqual(article1);
  });
  test("arrayContaining", () => {
    expect(articles).toEqual(expect.arrayContaining([article1, article3]));
  });
});

describe("オブジェクトの検証", () => {
  const author = { name: "taroyamada", age: 28 };
  test("toMatchObject", () => {
    expect(author).toMatchObject({ name: "taroyamada", age: 28 });
    expect(author).toMatchObject({ name: "taroyamada" }); // 部分的に一致している
    expect(author).not.toMatchObject({ gender: "man" });
  });
  test("toHaveProperty", () => {
    expect(author).toHaveProperty("name");
    expect(author).toHaveProperty("age");
  });
  const article = {
    title: "Testing with Jest",
    author: { name: "taroyamada", age: 28 },
  };
  test("objectContaining", () => {
    expect(article).toEqual({
      title: "Testing with Jest",
      author: expect.objectContaining({ name: "taroyamada" }),
    });
    expect(article).toEqual({
      title: "Testing with Jest",
      author: expect.not.objectContaining({ gender: "man" }),
    });
  });
});
