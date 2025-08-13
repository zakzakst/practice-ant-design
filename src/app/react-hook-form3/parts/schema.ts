import { z } from "zod";

export const SampleFormSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が不正です"),
  age: z.number().min(18, "18歳以上である必要があります"),
});

export type SampleFormValues = z.infer<typeof SampleFormSchema>;

export const fullNameSchema = z.object({
  first: z.string().min(1, "姓は必須です"),
  last: z.string().min(1, "名は必須です"),
});

export const userFormSchema = z.object({
  fullName: fullNameSchema,
  age: z.number().min(0, "年齢は0以上で入力してください"),
  job: z.enum(["engineer", "designer", "manager"]),
});
