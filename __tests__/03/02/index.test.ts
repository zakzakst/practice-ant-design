import { add, sub } from "./";

test("add: 1 + 2は3", () => {
  expect(add(1, 2)).toBe(3);
});

describe("add", () => {
  test("add: 1 + 1は2", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("add: 1 + 2は3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("四則演算", () => {
  describe("add", () => {
    test("add: 1 + 1は2", () => {
      expect(add(1, 1)).toBe(2);
    });

    test("add: 1 + 2は3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe("sub", () => {
    test("sub: 1 - 1は0", () => {
      expect(sub(1, 1)).toBe(0);
    });

    test("sub: 1 - 2は-1", () => {
      expect(sub(1, 2)).toBe(-1);
    });
  });
});
