"use client";
import useSWR from "swr";
import { useState, useMemo } from "react";
import axios, { isAxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { sleep } from "./utils";

// NOTE: Todoの型は https://dummyjson.com/todos のレスポンスから設定
type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type GetTodoParams = {
  skip?: number;
  limit?: number;
};

type GetTodoResponse = {
  total: number;
  skip: number;
  limit: number;
  todos: Todo[];
};

// SWR用にプロパティを追加したエラーオブジェクト
class SwrError extends Error {
  data?: unknown;
  status?: number;
}

const IsUseErrorMock = true;
const IsUseTodoMock = false;

const GetTodoResponseMock: GetTodoResponse = {
  todos: [
    {
      id: 1,
      todo: "15:00に郵便を受け取る",
      completed: false,
      userId: 16,
    },
    {
      id: 2,
      todo: "洗濯物を干す",
      completed: true,
      userId: 152,
    },
  ],
  total: 254,
  skip: 0,
  limit: 2,
};

const getTodoFetcher = async ({
  url,
  params,
}: {
  url: string;
  params: GetTodoParams;
}): Promise<GetTodoResponse | undefined> => {
  if (IsUseTodoMock) {
    sleep(1000);
    return GetTodoResponseMock;
  }
  try {
    const res = await axios.get(url, { params });
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

const useGetTodo = (params: GetTodoParams) => {
  const url = IsUseErrorMock
    ? "https://dummyjson.com/http/404/404エラーのレスポンスメッセージ"
    : IsUseTodoMock
    ? "static-data"
    : "https://dummyjson.com/todos";
  const { data, error, isLoading } = useSWR({ url, params }, getTodoFetcher);
  return {
    data,
    error,
    isLoading,
  };
};

export const SwrSample = () => {
  const [page, setPage] = useState<number>();
  const skip = useMemo<number | undefined>(() => {
    if (!page || page <= 1) return undefined;
    return (page - 1) * 5;
  }, [page]);
  const { data, error } = useGetTodo({ limit: 5, skip });
  return (
    <div>
      <h1>axios GET Todo</h1>
      <Input
        type="number"
        min={1}
        step={1}
        onChange={(e) => setPage(Number(e.target.value))}
      />
      {/* <div>{JSON.stringify(error)}</div> */}
      {error && <p>{error.data.message}</p>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
