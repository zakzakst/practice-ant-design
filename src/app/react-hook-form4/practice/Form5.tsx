"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Fields
type FullNameFieldValues = {
  first: string;
  last: string;
};
type FullNameFieldProps = {
  values: FullNameFieldValues;
  onChange: (values: FullNameFieldValues) => void;
};
const FullNameField = ({ values, onChange }: FullNameFieldProps) => {
  return (
    <div className="grid grid-cols-[120px_1fr]">
      <Label>氏名</Label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="苗字"
            value={values.first}
            onChange={(e) => onChange({ ...values, first: e.target.value })}
          />
        </div>
        <div>
          <Input
            placeholder="名前"
            value={values.last}
            onChange={(e) => onChange({ ...values, last: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

// schema
import { z } from "zod";
const fullNameSchema = z.object({
  first: z.string().min(1, "苗字は必須です"),
  last: z.string().min(1, "名前は必須です"),
});
const formSchema = z.object({
  fullName: fullNameSchema,
});
type FormValues = z.infer<typeof formSchema>;

// Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: {
        first: "",
        last: "",
      },
    },
  });
  const onSubmit = (values: FormValues) => {
    console.log("送信データ：", values);
  };
  return (
    <div className="container p-4">
      <h1>Controller</h1>
      <div className="mt-8">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <FullNameField
              values={field.value}
              onChange={(val) => {
                field.onChange(val);
                // NOTE: ここで加工もできる。※ただ下記は変な挙動になる。とりあえず知識だけ
                // field.onChange({
                //   first: `（${val.first}）`,
                //   last: `（${val.last}）`,
                // });
              }}
            />
          )}
        />
        {errors.fullName?.first && <p>{errors.fullName.first.message}</p>}
        {errors.fullName?.last && <p>{errors.fullName.last.message}</p>}
        <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      </div>
    </div>
  );
};
