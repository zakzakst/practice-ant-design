"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// schema
import { z } from "zod";
const formSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("メールアドレスの形式が不正です"),
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
});
type FormValues = z.infer<typeof formSchema>;

// Fields
import { useFormContext } from "react-hook-form";
const NameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label htmlFor="name">名前</Label>
      <div>
        <Input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
    </div>
  );
};
const EmailField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label htmlFor="email">メールアドレス</Label>
      <div>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
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
      name: "",
      email: "",
      age: 18,
    },
  });
  const onSubmit = (values: FormValues) => {
    console.log("送信データ：", values);
  };
  return (
    <div className="container p-4">
      <h1>FormProvider</h1>
      <div className="mt-8">
        <FormProvider {...methods}>
          <NameField />
          <EmailField />
          <AgeField />
          <Button onClick={methods.handleSubmit(onSubmit)}>送信</Button>
        </FormProvider>
      </div>
    </div>
  );
};
