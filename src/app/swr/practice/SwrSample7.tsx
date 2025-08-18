"use client";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sleep } from "./utils";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type DeleteTodoResponse = Todo & {
  isDeleted: boolean
  deletedOn: string
}

class SwrError extends Error {
  data?: unknown;
  status?: number;
}

const IsUseErrorMock = false;
const IsUseTodoMock = true;

const DeleteTodoResponseMock: DeleteTodoResponse = {
  id: 1,
  todo: "掃除する",
  completed: false,
  userId: 5,
  isDeleted: true,
  deletedOn: "2025-08-18T02:51:09.422Z",
};

const deleteTodoFetcher = async (
  url: string
): Promise<DeleteTodoResponse> => {
  if (IsUseTodoMock) {
    sleep(1000);
    return DeleteTodoResponseMock;
  }
  const res = await fetch(url, {
    method: 'DELETE',
  })
  if (!res.ok) {
    const error = new Error() as SwrError;
    error.data = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json()
}

const useDeleteTodo = (id?: number) => {
  const url = IsUseErrorMock
    ? "https://dummyjson.com/http/404/404エラーのレスポンスメッセージ"
    : id ? `https://dummyjson.com/todos/${id}` : null
  const { trigger, error, isMutating } = useSWRMutation(url, deleteTodoFetcher)
  return {
    trigger,
    error,
    isMutating,
  }
}

export const SwrSample = () => {
  const [targetTodoId, setTargetTodoId] = useState<number>()
  const { trigger, error } = useDeleteTodo(targetTodoId);
  const onSubmit = async () => {
    try {
      const res = await trigger()
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <h1>fetch DELETE Todo</h1>
      <Input
        type="number"
        min={1}
        step={1}
        onChange={(e) => setTargetTodoId(Number(e.target.value))}
      />
      <Button onClick={onSubmit}>削除</Button>
      {error && <p>{error.data.message}</p>}
    </div>
  );
};
