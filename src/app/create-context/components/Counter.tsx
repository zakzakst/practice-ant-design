"use client";

import { useCounter } from "../context/CounterContext";

export const Counter = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>カウント：{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
