"use client";
import { useRef, useState } from "react";

export const Sample = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={start}>スタート</button>
      <button onClick={stop}>ストップ</button>
    </div>
  );
};
