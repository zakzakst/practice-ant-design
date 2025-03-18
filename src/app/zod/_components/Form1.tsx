"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  // input type="number" は入力されたあ低が string になるため、Zod 側で coerce を使って 文字列を数値に変換する
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
});

type FormData = z.infer<typeof schema>;

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">メール：</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="age">年齢：</label>
        <input id="age" type="number" {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form1;
