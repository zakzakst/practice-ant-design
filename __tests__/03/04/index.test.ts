import { add, sub } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });

    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });

  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });

    test("返り値の下限は、'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});

describe("例外処理", () => {
  test("引数が0～100の範囲外だった場合、例外をスローする", () => {
    expect(() => add(110, -10)).toThrow("入力値は0～100の間で入力してください");
  });
});
