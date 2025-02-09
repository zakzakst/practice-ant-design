"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type FormValues = {
  username: string;
  profile: string;
  accept: boolean;
  switch: boolean;
  favorite: string;
  color: string;
};

const DefaultValues: FormValues = {
  username: "",
  profile: "",
  accept: false,
  switch: false,
  favorite: "",
  color: "",
};

const Page = () => {
  const {
    register,
    handleSubmit,
    control,
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
          <Controller
            name="accept"
            control={control}
            rules={{
              required: "同意が必要です",
              // validate: (value) => value || "同意が必要です",
            }}
            render={({ field }) => (
              <Checkbox
                id="accept"
                checked={field.value}
                onCheckedChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Label htmlFor="accept">同意する</Label>
          {errors.accept && (
            <p className="text-destructive">{errors.accept.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Controller
            name="switch"
            control={control}
            rules={{
              required: "同意が必要です",
            }}
            render={({ field }) => (
              <Switch
                id="switch"
                checked={field.value}
                onCheckedChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Label htmlFor="switch">同意する</Label>
          {errors.switch && (
            <p className="text-destructive">{errors.switch.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Controller
            name="favorite"
            control={control}
            rules={{
              required: "オプションを選択してください",
            }}
            render={({ field }) => (
              <RadioGroup
                // defaultValue="option-one"
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.favorite && (
            <p className="text-destructive">{errors.favorite.message}</p>
          )}
        </div>

        <div className="mt-4">
          <Controller
            name="color"
            control={control}
            rules={{
              required: "色を選択してください",
            }}
            render={({ field }) => (
              <Select
                defaultValue="dark"
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="色を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="red" disabled>
                    Red
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.color && (
            <p className="text-destructive">{errors.color.message}</p>
          )}
        </div>

        {/* TODO: APIで項目を取得するパターンのセレクトボックス */}

        <div className="mt-4">
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            送信
          </Button>
        </div>

        <div className="mt-4">
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      </form>
    </div>
  );
};

export default Page;
