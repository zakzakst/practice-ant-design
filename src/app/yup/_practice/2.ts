import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  password: yup
    .string()
    .min(8, "パスワードは8文字以上でなければなりません")
    .matches(/[0-9]/, "パスワードには少なくとも1つの数字を含めてください")
    .matches(/[a-zA-Z]/, "パスワードには少なくとも1つのアルファベットを含めてください")
    .required("パスワードは必須です"),
});

const data = {
  email: "test@example.com",
  password: "password123",
};

schema
  .validate(data)
  .then(() => console.log("バリデーション成功"))
  .catch((e) => console.log("エラー:", e.errors));

const invalidData = {
  email: "invalidemail",
  password: "short",
};

schema
  .validate(invalidData)
  .then(() => console.log("バリデーション成功"))
  .catch((e) => console.log("エラー:", e.errors));
