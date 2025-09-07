test("jest.fn()を使ったモック関数の動作", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("jest.fn()の戻り値を設定する", () => {
  // 常に"Hello, Jest!"を返す
  const mockFn = jest.fn().mockReturnValue("Hello, Jest!");
  expect(mockFn()).toBe("Hello, Jest!");
  expect(mockFn()).toBe("Hello, Jest!");
});

test("呼び出しごとに異なる値を返す", () => {
  // mockReturnValueOnce() を使うと、特定の回数だけ異なる戻り値を設定できる
  const mockFn = jest.fn().mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValue(3);
  expect(mockFn()).toBe(1);
  expect(mockFn()).toBe(2);
  expect(mockFn()).toBe(3);
  expect(mockFn()).toBe(3);
});
