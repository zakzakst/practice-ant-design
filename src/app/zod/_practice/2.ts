// ステップ2: オブジェクトスキーマとネスト

import { z } from "zod";

// ユーザースキーマ
const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
});

// 検証
console.log(userSchema.safeParse({ name: "Alice", age: 20 })); // { success: true, data: { name: 'Alice', age: 20 } }
console.log(userSchema.safeParse({ name: "Bob", age: 16 })); // { success: false, error: ... }

// オブジェクトの中に別のオブジェクトを含めることも可能
const addressSchema = z.object({
  city: z.string(),
  zipCode: z.string().length(7), // 7桁の郵便番号
});

const userWithAddressSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
  address: addressSchema, // ネストされたオブジェクト
});

console.log(
  userWithAddressSchema.safeParse({
    name: "Alice",
    age: 20,
    address: { city: "Tokyo", zipCode: "1234567" },
  }),
); // { success: true, data: { name: 'Alice', age: 20, address: { city: 'Tokyo', zipCode: '1234567' } } }

console.log(
  userWithAddressSchema.safeParse({
    name: "Bob",
    age: 30,
    address: { city: "Osaka", zipCode: "12345" }, // 郵便番号が7桁でない
  }),
); // { success: false, error: ... }
