'use client';

import { motion } from "motion/react";

export const Motion = () => {
  return (
    <div style={{ padding: 40, height: "200vh" }}>
      <h2>スクロールしてください ↓</h2>

      <div style={{ marginTop: "120vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: "#4F46E5",
            width: 200,
            height: 100,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Fade in!
        </motion.div>
      </div>
    </div>
  );
}