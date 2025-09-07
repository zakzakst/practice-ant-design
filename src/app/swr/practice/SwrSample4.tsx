"use client";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import axios, { isAxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { sleep } from "./utils";

const postTodoFormSchema = z.object({
  todo: z.string().min(1, "TODOは入力必須項目です"),
  completed: z.boolean(),
});

type PostTodoFormValue = z.infer<typeof postTodoFormSchema>;

type PostTodoRequest = PostTodoFormValue & {
  userId: number;
};

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type PostTodoResponse = Todo;

class SwrError extends Error {
  data?: unknown;
  status?: number;
}

const IsUseErrorMock = true;
const IsUseTodoMock = false;

const PostTodoResponseMock: PostTodoResponse = {
  id: 1,
  todo: "掃除する",
  completed: false,
  userId: 5,
};

const postTodoFetcher = async (
  url: string,
  { arg }: { arg: PostTodoRequest },
): Promise<PostTodoResponse | undefined> => {
  if (IsUseTodoMock) {
    sleep(1000);
    return PostTodoResponseMock;
  }
  try {
    const res = await axios.post(url, arg, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (e) {
    if (isAxiosError(e)) {
      const error = new Error() as SwrError;
      error.data = e.response?.data;
      error.status = e.response?.status;
      throw error;
    }
  }
};

const usePostTodo = () => {
  const url = IsUseErrorMock
    ? "https://dummyjson.com/http/404/404エラーのレスポンスメッセージ"
    : "https://dummyjson.com/todos/add";
  const { trigger, error, isMutating } = useSWRMutation(url, postTodoFetcher);
  return {
    trigger,
    error,
    isMutating,
  };
};

export const SwrSample = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<PostTodoFormValue>({
    resolver: zodResolver(postTodoFormSchema),
    defaultValues: {
      todo: "",
      completed: false,
    },
  });
  const { trigger, error } = usePostTodo();
  const onSubmit = async (value: PostTodoFormValue) => {
    try {
      const res = await trigger({
        ...value,
        userId: 1,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h1>axios POST Todo</h1>
      <Input {...register("todo")} />
      {formErrors.todo && <p>{formErrors.todo.message}</p>}
      <div className="flex items-center gap-2">
        完了：
        <Controller
          name="completed"
          control={control}
          render={({ field }) => (
            <Checkbox checked={field.value} onCheckedChange={(val) => field.onChange(val)} />
          )}
        />
      </div>
      <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      {error && <p>{error.data.message}</p>}
    </div>
  );
};
