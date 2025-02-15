import { z } from "zod";

// API レスポンスのスキーマ定義
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// TypeScript の型定義
type User = z.infer<typeof userSchema>;

// サンプルのレスポンスデータ
const sampleResponse = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const result = userSchema.safeParse(sampleResponse);

if (result.success) {
  const user: User = result.data;
  console.log(user);
} else {
  console.error(result.error.format());
}

const fetchUser = async () => {
  try {
    const response = await fetch("https://api.example.com/users/1");
    const data = await response.json();

    // Zodでバリデーション
    const result = userSchema.safeParse(data);

    if (!result.success) {
      console.error("APIレスポンスの形式が不正：", result.error.format());
      return null;
    }

    return result.data;
  } catch (e) {
    console.error("APIリクエストエラー：", e);
    return null;
  }
};

fetchUser().then((user) => {
  if (user) {
    console.log("取得したユーザー：", user);
  }
});

const usersSchema = z.array(userSchema);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();

    const result = usersSchema.safeParse(data);

    if (!result.success) {
      console.error("APIレスポンスの形式が不正：", result.error.format());
      return [];
    }

    return result.data;
  } catch (e) {
    console.error("APIリクエストエラー：", e);
    return [];
  }
};

fetchUsers().then((users) => {
  console.log("取得したユーザー一覧：", users);
});
