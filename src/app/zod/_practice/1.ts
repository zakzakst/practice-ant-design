// ステップ1: Zodとは？基本的なスキーマの定義

import { z } from "zod";

// 文字列スキーマ
const nameSchema = z.string();

// バリデーション付きスキーマ
const ageSchema = z.number().min(18, "18歳以上である必要があります");

// 検証（バリデーション）
console.log(nameSchema.safeParse("Alice")); // { success: true, data: 'Alice' }
console.log(nameSchema.safeParse(123)); // { success: false, error: ... }
console.log(ageSchema.safeParse(20)); // { success: true, data: 20 }
console.log(ageSchema.safeParse(16)); // { success: false, error: ...}
