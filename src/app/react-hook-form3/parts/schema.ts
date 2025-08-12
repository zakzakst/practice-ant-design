import { z } from "zod";

export const SampleFormSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が不正です"),
  age: z.number().min(18, "18歳以上である必要があります"),
});

export type SampleFormValues = z.infer<typeof SampleFormSchema>;
