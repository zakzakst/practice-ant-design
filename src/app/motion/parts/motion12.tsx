'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Motion = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div>
      <div style={{ height: "150vh" }} />

      <div
        ref={ref}
        style={{
          height: 300,
          overflow: "hidden",
          borderRadius: 12,
          position: "relative",
        }}
      >
        <motion.img
          src="https://picsum.photos/800"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            y: y, // ← パララックス
          }}
        />
      </div>

      <div style={{ height: "150vh" }} />
    </div>
  );
}