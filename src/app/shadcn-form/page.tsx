"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  // input type="number" は入力されたあ低が string になるため、Zod 側で coerce を使って 文字列を数値に変換する
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
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
    <div>
      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="name">名前：</Label>
          <Input id="name" type="text" {...register("name")} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="email">メール：</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="age">年齢：</Label>
          <Input id="age" type="number" {...register("age")} />
        </div>
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </div>
  );
};

export default Page;
