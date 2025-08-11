"use client";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const [count, setCount] = useState(0);

  // 前回の値を保持するref
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    if (prevCountRef.current !== null) {
      console.log(`前回: ${prevCountRef.current}, 今回: ${count}`);
      if (count > prevCountRef.current) {
        console.log("値が増えた！");
      } else if (count < prevCountRef.current) {
        console.log("値が減った！");
      } else {
        console.log("変化なし");
      }
    }
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};
