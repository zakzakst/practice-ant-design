"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上である必要があります"),
});

const Form3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    // mode: "onBlur",
  });

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    console.log("送信データ", data);
    alert("送信成功");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email：</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{String(errors.email.message)}</p>}
      </div>

      <div>
        <label htmlFor="password">Password：</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{String(errors.password.message)}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form3;
