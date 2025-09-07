"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// schema
import { z } from "zod";
const addressSchema = z.object({
  postalCode: z.string().min(1, "郵便番号は必須です"),
  city: z.string().min(1, "市区町村は必須です"),
});
const formSchema = z.object({
  addresses: z
    .array(
      addressSchema,
      // z.object({
      //   postalCode: z.string().min(1, "郵便番号は必須です"),
      //   city: z.string().min(1, "市区町村は必須です"),
      // })
    )
    .min(1, "住所は1つ以上必要です"),
});
type FormValues = z.infer<typeof formSchema>;

// Fields
import { useFieldArray, useFormContext } from "react-hook-form";
const AddressesField = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label>住所</Label>
      <div>
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-[1fr_1fr_80px] gap-4">
            <div>
              <Input placeholder="郵便番号" {...register(`addresses.${index}.postalCode`)} />
              {errors.addresses?.[index]?.postalCode && (
                <p>{errors.addresses[index]?.postalCode?.message}</p>
              )}
            </div>
            <div>
              <Input placeholder="市区町村" {...register(`addresses.${index}.city`)} />
              {errors.addresses?.[index]?.city && <p>{errors.addresses[index]?.city?.message}</p>}
            </div>
            <Button onClick={() => remove(index)}>削除</Button>
          </div>
        ))}
        <Button onClick={() => append({ postalCode: "", city: "" })}>追加</Button>
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
      <h1>配列フィールド</h1>
      <div className="mt-8">
        <FormProvider {...methods}>
          <AddressesField />
          {errors.addresses && <p>{errors.addresses.message}</p>}
          <Button onClick={methods.handleSubmit(onSubmit)}>送信</Button>
        </FormProvider>
      </div>
    </div>
  );
};
