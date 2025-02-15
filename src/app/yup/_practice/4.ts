import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
});

export type User = yup.InferType<typeof userSchema>;

const usersSchema = yup.array().of(userSchema);

const data = [
  { name: "山田太郎", email: "taro@example.com" },
  { name: "佐藤花子", email: "hanako@example.com" },
];

usersSchema
  .validate(data)
  .then(() => console.log("バリデーション成功"))
  .catch((err) => console.log("エラー:", err.errors));
