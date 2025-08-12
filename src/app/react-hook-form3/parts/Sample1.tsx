"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import type { SampleFormValues } from "./schema";
import { SampleFormSchema } from "./schema";

export const SampleForm = () => {
  const methods = useForm<SampleFormValues>({
    resolver: zodResolver(SampleFormSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
    },
  });

  const onSubmit = (data: SampleFormValues) => {
    console.log("test");
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <input type="text" {...methods.register("name")} />
      <button
        onClick={() => {
          console.log("onClick");
          methods.handleSubmit(onSubmit);
        }}
      >
        ボタン
      </button>
    </FormProvider>
  );
};
