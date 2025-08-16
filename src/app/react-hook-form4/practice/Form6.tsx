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
  addresses: z.array(addressSchema).min(1, "住所は1つ以上必要です"),
});
type FormValues = z.infer<typeof formSchema>;

// Fields
import { useController, useFormContext, useFieldArray } from "react-hook-form";
const lookupCity = (postalCode: string) => {
  if (postalCode === "100-0001") return "千代田区";
  if (postalCode === "150-0001") return "渋谷区";
  return "";
};
type AddressFieldProps = {
  index: number;
  onRemove: () => void;
};
const AddressField = ({ index, onRemove }: AddressFieldProps) => {
  const { control } = useFormContext<FormValues>();
  const postalCodeCtrl = useController({
    name: `addresses.${index}.postalCode`,
    control,
  });
  const cityCtrl = useController({
    name: `addresses.${index}.city`,
    control,
  });
  const handlePostalCodeChange = (value: string) => {
    postalCodeCtrl.field.onChange(value);
    const city = lookupCity(value);
    if (city) {
      cityCtrl.field.onChange(city);
    }
  };
  return (
    <div className="grid grid-cols-[1fr_1fr_80px] gap-4">
      <div>
        <Input
          placeholder="郵便番号"
          value={postalCodeCtrl.field.value}
          onChange={(e) => handlePostalCodeChange(e.target.value)}
        />
        {postalCodeCtrl.fieldState.error && (
          <p>{postalCodeCtrl.fieldState.error.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="市区町村"
          value={cityCtrl.field.value}
          onChange={(e) => cityCtrl.field.onChange(e.target.value)}
        />
        {cityCtrl.fieldState.error && (
          <p>{cityCtrl.fieldState.error.message}</p>
        )}
      </div>
      <Button onClick={onRemove}>削除</Button>
    </div>
  );
};
const AddressFields = () => {
  const { control } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label>住所</Label>
      <div>
        {fields.map((field, index) => (
          <AddressField
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
        <Button onClick={() => append({ postalCode: "", city: "" })}>
          追加
        </Button>
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
      <h1>useController</h1>
      <div className="mt-8">
        <FormProvider {...methods}>
          <AddressFields />
          {errors.addresses && <p>{errors.addresses.message}</p>}
          <Button onClick={methods.handleSubmit(onSubmit)}>送信</Button>
        </FormProvider>
      </div>
    </div>
  );
};
