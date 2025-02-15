// ステップ5: カスタムバリデーション
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "パスワードは8文字以上である必要があります")
  .refine((password) => /[A-Z]/.test(password), {
    message: "パスワードには大文字を含める必要があります",
  })
  .refine((password) => /\d/.test(password), {
    message: "パスワードには数字を含める必要があります",
  });

const result = passwordSchema.safeParse("password");

if (!result.success) {
  console.log(result.error.format());
}
// 実行結果
// {
//   "_errors": [],
//   "password": {
//     "_errors": ["パスワードには大文字を含める必要があります", "パスワードには数字を含める必要があります"]
//   }
// }

const passwordSchema2 = z.string().superRefine((password, ctx) => {
  if (password.length < 8) {
    ctx.addIssue({
      code: z.ZodIssueCode.too_small,
      type: "string",
      minimum: 8,
      inclusive: true,
      message: "パスワードは8文字以上である必要があります",
    });
  }
  if (!/[A-Z]/.test(password)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "パスワードには大文字を含める必要があります",
    });
  }
  if (!/\d/.test(password)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "パスワードには数字を含める必要があります",
    });
  }
});

const result2 = passwordSchema2.safeParse("pass");

if (!result2.success) {
  console.log(result2.error.format());
}
// {
//   "_errors": [],
//   "password": {
//     "_errors": ["パスワードは8文字以上である必要があります", "パスワードには大文字を含める必要があります", "パスワードには数字を含める必要があります"]
//   }
// }
