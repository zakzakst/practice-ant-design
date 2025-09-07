"use client";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const [data, setData] = useState<string | null>(null);

  // マウント中かどうかを保持
  const isMountedRef = useRef(true);

  useEffect(() => {
    // コンポーネントのアンマウント時に false にする
    return () => {
      console.log(isMountedRef.current);
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setData("読み込み中...");

      // 適当な遅延付きのフェッチ
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await response.json();

      // console.log(isMountedRef.current);
      // アンマウント済みなら何もしない
      if (!isMountedRef.current) return;

      setData(JSON.stringify(json));
    };

    fetchData();
  }, []);

  return <div>{data}</div>;
};
