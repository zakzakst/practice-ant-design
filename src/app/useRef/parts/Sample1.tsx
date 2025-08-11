"use client";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const [count, setCount] = useState(0);

  // 初回かどうかを記録するref
  const isFirstRender = useRef(true);

  useEffect(() => {
    // console.log("test");
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("countが変わったので処理します：", count);
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};
