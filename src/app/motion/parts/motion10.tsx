'use client';

import { motion } from "motion/react";

export const Motion = () => {
  return (
    <div>
      <div style={{ height: "150vh" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}  // ← 画面20%入ったら発火
        transition={{ duration: 0.6 }}
        style={{
          width: 200,
          height: 200,
          background: "#4F46E5",
          borderRadius: 12,
        }}
      />

      <div style={{ height: "150vh" }} />
    </div>
  );
}