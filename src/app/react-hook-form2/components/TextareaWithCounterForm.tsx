"use client";

import { useForm } from "react-hook-form";
import { TextareaWithCounter } from "./TextareaWithCounter";

type FormValues = {
  bio: string;
};

export const TextareaWithCounterForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      bio: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
    alert(`送信されました: ${data.bio}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4"
    >
      <TextareaWithCounter
        name="bio"
        label="自己紹介（最大100文字）"
        control={control}
        maxLength={100}
        rules={{
          required: "自己紹介は必須です",
          // maxLength: {
          //   value: 100,
          //   message: "100文字以内で入力してください",
          // },
        }}
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        送信
      </button>
    </form>
  );
};
