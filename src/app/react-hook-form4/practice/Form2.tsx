"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// schema
import { z } from "zod";
const fullNameSchema = z.object({
  first: z.string().min(1, "苗字は必須です"),
  last: z.string().min(1, "名前は必須です"),
});
const formSchema = z.object({
  fullName: fullNameSchema,
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
});
type FormValues = z.infer<typeof formSchema>;

// Fields
import { useFormContext } from "react-hook-form";
const FullNameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label>氏名</Label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input placeholder="苗字" {...register("fullName.first")} />
          {errors.fullName?.first && <p>{errors.fullName.first.message}</p>}
        </div>
        <div>
          <Input placeholder="名前" {...register("fullName.last")} />
          {errors.fullName?.last && <p>{errors.fullName.last.message}</p>}
        </div>
      </div>
    </div>
  );
};
const AgeField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label htmlFor="age">年齢</Label>
      <div>
        <Input id="age" type="number" {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
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
    defaultValues: {
      fullName: {
        first: "山田",
        last: "太郎",
      },
      age: 18,
    },
  });
  const onSubmit = (values: FormValues) => {
    console.log("送信データ：", values);
  };
  return (
    <div className="container p-4">
      <h1>複合フィールド</h1>
      <div className="mt-8">
        <FormProvider {...methods}>
          <AgeField />
          <FullNameField />
          <Button onClick={methods.handleSubmit(onSubmit)}>送信</Button>
        </FormProvider>
      </div>
    </div>
  );
};
