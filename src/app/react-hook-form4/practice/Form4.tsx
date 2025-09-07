"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// schema
import { z } from "zod";
const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "パスワードは8文字以上の必要があります")
      .refine(
        (val) => {
          return /[0-9]/.test(val) && /[a-zA-Z]/.test(val);
        },
        { message: "パスワードは英字と数字を含める必要があります" },
      ),
    confirmPassword: z.string().min(8, "確認用パスワードは8文字以上の必要があります"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        // path: ["confirmPassword"], // どのフィールドのエラーとするか設定
        path: [], // 空の配列でフォーム全体のエラーとして設定
        message: "パスワードが一致しません",
      });
    }
  });
type FormValues = z.infer<typeof formSchema>;

// Fields
import { useFormContext } from "react-hook-form";
const PasswordField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label htmlFor="password">パスワード</Label>
      <div>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
    </div>
  );
};
const ConfirmPasswordField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label htmlFor="confirmPassword">確認用パスワード</Label>
      <div>
        <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
    </div>
  );
};

// Form
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
export const Form = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const {
    formState: { errors },
  } = methods;
  const onSubmit = (values: FormValues) => {
    console.log("送信データ：", values);
  };
  return (
    <div className="container p-4">
      <h1>カスタムエラー</h1>
      <div className="mt-8">
        <FormProvider {...methods}>
          <PasswordField />
          <ConfirmPasswordField />
          {/* NOTE:
            上手く動かない、Chat GPTに聞いたら「RHF と zodResolver の「フォーム全体（root）エラーの扱いがバージョンによって微妙に違う」ことが原因ではないか」とのこと
            何パターンか試したが、エラー解消しなかった。パッケージのバージョン変更までやると時間かかりそうなので一旦現状で保留
          */}
          {errors.root?.message && <p>{errors.root.message}</p>}
          <Button onClick={methods.handleSubmit(onSubmit)}>送信</Button>
        </FormProvider>
      </div>
    </div>
  );
};
