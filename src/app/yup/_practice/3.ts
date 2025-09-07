import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  isSignup: yup.boolean(),
  password: yup.string().when("isSignup", {
    is: (val: boolean) => val === true,
    then: (thenSchema) =>
      thenSchema
        .min(8, "パスワードは8文字以上でなければなりません")
        .matches(/[0-9]/, "パスワードには少なくとも1つの数字を含めてください")
        .matches(/[a-zA-Z]/, "パスワードには少なくとも1つのアルファベットを含めてください")
        .required("パスワードは必須です"),
    otherwise: (otherSchema) => otherSchema.notRequired(),
  }),
});

const data = {
  email: "test@example.com",
  isSignup: true, // ここをtrueにするとパスワードのバリデーションが必要
  password: "password123",
};

schema
  .validate(data)
  .then(() => console.log("バリデーション成功"))
  .catch((err) => console.log("エラー:", err.errors));

const dataWithoutPassword = {
  email: "test@example.com",
  isSignup: false, // パスワードのバリデーションが不要
  password: "",
};

schema
  .validate(dataWithoutPassword)
  .then(() => console.log("バリデーション成功"))
  .catch((err) => console.log("エラー:", err.errors));
