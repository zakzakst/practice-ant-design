import { wait, timeout } from "./";

test("指定時間待つと、経過時間をもってresolveされる", () => {
  return wait(50).then((duration) => {
    expect(duration).toBe(50);
  });
});

test("指定時間待つと、経過時間をもってresolveされる", () => {
  return expect(wait(50)).resolves.toBe(50);
});

test("指定時間待つと、経過時間をもってresolveされる", async () => {
  await expect(wait(50)).resolves.toBe(50);
});

test("指定時間待つと、経過時間をもってresolveされる", async () => {
  expect(await wait(50)).toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる", () => {
  return timeout(50).catch((duration) => {
    expect(duration).toBe(50);
  });
});

test("指定時間待つと、経過時間をもってrejectされる", () => {
  return expect(timeout(50)).rejects.toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる", async () => {
  await expect(timeout(50)).rejects.toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる", async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});
