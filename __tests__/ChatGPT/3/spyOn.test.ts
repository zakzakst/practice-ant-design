const user = {
  getName: () => {
    return "Alice";
  },
};

test("spyOn を使ってメソッドの呼び出しを監視する", () => {
  const spy = jest.spyOn(user, "getName");
  user.getName();
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
});

test("spyOn でメソッドの戻り値を変更する", () => {
  jest.spyOn(user, "getName").mockReturnValue("Bob");
  expect(user.getName()).toBe("Bob");
});
