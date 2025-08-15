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

export type userFormValues = z.infer<typeof userFormSchema>;

export const addressSchema = z.object({
  address: z
    .array(
      z.object({
        postalCode: z.string().min(1, "郵便番号は必須です"),
        city: z.string().min(1, "市区町村は必須です"),
      })
    )
    .min(1, "住所は1つ以上必要です"),
});

export type addressValues = z.infer<typeof addressSchema>;
