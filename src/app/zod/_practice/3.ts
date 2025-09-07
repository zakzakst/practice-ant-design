// ステップ3: 配列スキーマ

import { z } from "zod";

const tagsSchema = z.array(z.string()).min(1); // 1つ以上の文字列配列

console.log(tagsSchema.safeParse(["JavaScript", "TypeScript"])); // { success: true, data: ['JavaScript', 'TypeScript'] }
console.log(tagsSchema.safeParse([])); // { success: false, error: ... }
console.log(tagsSchema.safeParse(["JavaScript", 123])); // { success: false, error: ... } ※数値が含まれているため

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const usersSchema = z.array(userSchema);

console.log(
  usersSchema.safeParse([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]),
); // { success: true, data: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ] }
