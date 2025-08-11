"use client";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const [pos, setPos] = useState(0);
  const requestIdRef = useRef<number | null>(null);

  const animate = () => {
    setPos((prev) => prev + 2);
    requestIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestIdRef.current !== null) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <div style={{ transform: `translateX(${pos}px)` }}>🚀</div>;
};
