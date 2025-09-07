"use client";

import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上である必要があります"),
});

type FormData = z.infer<typeof schema>;

const defaultData: FormData = {
  email: "",
  password: "",
};

type FormError = {
  email?: string;
  password?: string;
};

const Form2 = () => {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const [errors, setErrors] = useState<FormError>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
    } else {
      setErrors({});
      alert("送信成功");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email：</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password：</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form2;
