"use client";
import { useEffect, useRef, useState } from "react";

// NOTE: <T,> のカンマは TypeScript のジェネリクス構文で必要な安全対策（JSX の <T> と区別するため）
const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const Sample = () => {
  const [count, setCount] = useState(0);

  // 前回の値を保持するref
  const prevCount = usePrevious(count);

  useEffect(() => {
    if (prevCount !== undefined) {
      console.log(`前回: ${prevCount}, 今回: ${count}`);
      if (count > prevCount) {
        console.log("値が増えた！");
      } else if (count < prevCount) {
        console.log("値が減った！");
      } else {
        console.log("変化なし");
      }
    }
  }, [prevCount, count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};
