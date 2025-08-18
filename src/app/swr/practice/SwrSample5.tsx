"use client";
import useSWRMutation from "swr/mutation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { sleep } from "./utils";

const putTodoFormSchema = z.object({
  todo: z.string().min(1, "TODOは入力必須項目です"),
  completed: z.boolean(),
});

type PutTodoFormValue = z.infer<typeof putTodoFormSchema>;

type PutTodoRequest = PutTodoFormValue;

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type PutTodoResponse = Todo;

class SwrError extends Error {
  data?: unknown;
  status?: number;
}

const IsUseErrorMock = false;
const IsUseTodoMock = true;

const PutTodoResponseMock: PutTodoResponse = {
  id: 1,
  todo: "掃除する",
  completed: false,
  userId: 5,
};

const putTodoFetcher = async (
  url: string,
  { arg }: { arg: PutTodoRequest }
): Promise<PutTodoResponse> => {
  if (IsUseTodoMock) {
    sleep(1000);
    return PutTodoResponseMock;
  }
  const res = await fetch(url, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  })
  if (!res.ok) {
    const error = new Error() as SwrError;
    error.data = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json()
}

const usePutTodo = (id?: number) => {
  const url = IsUseErrorMock
    ? "https://dummyjson.com/http/404/404エラーのレスポンスメッセージ"
    : id ? `https://dummyjson.com/todos/${id}` : null
  const { trigger, error, isMutating } = useSWRMutation(url, putTodoFetcher)
  return {
    trigger,
    error,
    isMutating,
  }
}

export const SwrSample = () => {
  const [targetTodoId, setTargetTodoId] = useState<number>()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: {errors: formErrors}
  } = useForm<PutTodoFormValue>({
    resolver: zodResolver(putTodoFormSchema),
  })
  const { trigger, error } = usePutTodo(targetTodoId);
  const onSelectTargetTodo = () => {
    // 下記のTODOを変更対象として選択した想定
    // { id: 1, todo: 'お昼ご飯を買いに行く', completed: true }
    setTargetTodoId(2)
    setValue('todo', 'お昼ご飯を買いに行く')
    setValue('completed', true)
  }
  const onSubmit = async (value: PutTodoFormValue) => {
    try {
      const res = await trigger(value)
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <h1>fetch PUT Todo</h1>
      <Input {...register("todo")} />
      {formErrors.todo && <p>{formErrors.todo.message}</p>}
      <div className="flex items-center gap-2">
        完了：
        <Controller
          name="completed"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={(val) => field.onChange(val)}
            />
          )}
        />
      </div>
      <Button onClick={onSelectTargetTodo}>対象のTODO選択</Button>
      <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      {error && <p>{error.data.message}</p>}
    </div>
  );
};
