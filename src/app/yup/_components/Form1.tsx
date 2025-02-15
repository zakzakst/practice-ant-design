"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  age: yup
    .number()
    // フィールドが空文字（""）の場合に null に変換する処理です。これにより、空文字が NaN に変換されるのを防ぎます。
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .positive("年齢は正の数でなければなりません")
    .integer("年齢は整数でなければなりません")
    .required("年齢は必須です"),
});

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    console.log("フォームデータ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">名前</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="age">年齢</label>
        <input id="age" type="number" {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form1;
