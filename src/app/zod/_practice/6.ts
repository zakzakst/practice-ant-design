import { z } from "zod";

// 文字列を受け取って数値に変換する Zod スキーマ
const ageSchema = z.string().transform((val) => parseInt(val, 10));

const result = ageSchema.safeParse("25");

if (result.success) {
  console.log(result.data); // 25（数値として変換された値）
}

// 複数の変換をチェーンする
const ageSchema2 = z
  .string()
  .transform((val) => parseInt(val, 10))
  .refine((val) => val >= 18, {
    message: "年齢は18歳以上である必要があります",
  });

const result2 = ageSchema2.safeParse("20");

if (result2.success) {
  console.log(result2.data); // 20（数値）
}

// よく使う変換パターン
// 文字列 → 数値
z.string().transform((val) => parseInt(val, 10));
// 文字列 → Date 型
z.string().transform((val) => new Date(val));
// 数値 → 真偽値
z.number().transform((val) => val > 0);
// 数字 → 指定範囲内チェック
z.number().refine((val) => val >= 10 && val <= 100);
