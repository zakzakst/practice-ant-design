"use client";

import { useForm } from "react-hook-form";
import { useMemo } from "react";
import clsx from "clsx";

type FormValues = {
  bio: string;
};

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      bio: "",
    },
  });

  const bioValue = watch("bio", "");

  const counterColor = useMemo(() => {
    if (bioValue.length >= 100) return "text-red-600";
    if (bioValue.length >= 90) return "text-yellow-600";
    return "text-gray-500";
  }, [bioValue]);

  const onSubmit = (data: FormValues) => {
    console.log("送信データ：", data);
    alert(`送信されました：${data.bio}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4"
    >
      <label htmlFor="bio" className="block font-bold">
        自己紹介（最大100文字）
      </label>
      <textarea
        id="bio"
        {...register("bio", {
          required: "自己紹介は必須です",
          maxLength: {
            value: 100,
            message: "100文字以内で入力してください",
          },
        })}
        className="w-full rounded border p-2"
        rows={4}
      />
      <div className={clsx("text-right text-sm", counterColor)}>
        {bioValue.length} / 100文字
      </div>
      {errors.bio && (
        <p className="text-sm text-red-500">{errors.bio.message}</p>
      )}
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        送信
      </button>
    </form>
  );
};
