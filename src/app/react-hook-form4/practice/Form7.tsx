"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

// schema
const formSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が不正です"),
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
  task: z.object({
    title: z.string(),
    detail: z.string(),
  }),
});
type FormValues = z.infer<typeof formSchema>;

// Form
export const Form = () => {
  const { register, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      task: {
        title: "",
        detail: "",
      },
    },
  });

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      console.log("変更がありました:", name, name && values.name);
    });
    // 監視を解除
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="container p-4">
      <h1>変更の検知</h1>
      <div className="mt-8 grid grid-cols-1 gap-3">
        <input type="text" {...register("name")} />
        <input type="email" {...register("email")} />
        <input type="number" {...register("age")} />
        <input type="text" {...register("task.title")} />
        <input type="text" {...register("task.detail")} />
      </div>
    </div>
  );
};
