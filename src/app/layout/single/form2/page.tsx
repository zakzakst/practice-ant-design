"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type FormValues = {
  username: string;
  profile: string;
  accept: boolean;
};

const DefaultValues: FormValues = { username: "", profile: "", accept: false };

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: DefaultValues,
  });
  const [values, setValues] = useState<FormValues>(DefaultValues);

  const onSubmit = (data: FormValues) => {
    setValues(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="username">ユーザー名</Label>
          <Input
            type="text"
            id="username"
            {...register("username", {
              required: "入力必須項目です",
              maxLength: { value: 8, message: "8文字以内で入力してください" },
            })}
          />
          {errors.username && (
            <p className="text-destructive">{errors.username.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Label htmlFor="profile">プロフィール</Label>
          <Textarea
            id="profile"
            {...register("profile", {
              required: "入力必須項目です",
              maxLength: { value: 8, message: "8文字以内で入力してください" },
            })}
          />
          {errors.profile && (
            <p className="text-destructive">{errors.profile.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Label htmlFor="accept">同意</Label>

          <Checkbox
            id="accept"
            {...register("accept", {
              required: "同意が必要です",
            })}
            onCheckedChange={(e) =>
              setValues({ ...values, accept: e as boolean })
            }
          />
          {errors.accept && (
            <p className="text-destructive">{errors.accept.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Submit
          </Button>
        </div>

        <div className="mt-4">
          <pre>{JSON.stringify(values, null, 2)}</pre>
          {/* <pre>{JSON.stringify(errors)}</pre> */}
        </div>
      </form>
    </div>
  );
};

export default Page;
