'use client';

import { motion } from "motion/react";

export const Motion = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "#4F46E5",
          width: 180,
          height: 80,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 20,
        }}
      >
        Hello Motion!
      </motion.div>
    </div>
  );
}