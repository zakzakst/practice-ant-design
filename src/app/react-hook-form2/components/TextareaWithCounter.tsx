"use client";

import clsx from "clsx";
import { useMemo } from "react";
import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
  maxLength: number;
};

export const TextareaWithCounter = ({ name, label, control, rules = {}, maxLength }: Props) => {
  const mergedRules: RegisterOptions = {
    ...rules,
    maxLength: rules?.maxLength ?? {
      value: maxLength,
      message: `${maxLength}文字以内で入力してください`,
    },
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: mergedRules,
  });

  const currentLength = field.value?.length || 0;

  const counterColor = useMemo(() => {
    if (currentLength >= maxLength) return "text-red-600";
    if (currentLength >= maxLength - 10) return "text-yellow-600";
    return "text-gray-500";
  }, [currentLength, maxLength]);

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block font-bold">
        {label}
      </label>
      <textarea id={name} {...field} className="w-full rounded border p-2" rows={4} />
      <div className={clsx("text-right text-sm", counterColor)}>
        {currentLength} / {maxLength} 文字
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
