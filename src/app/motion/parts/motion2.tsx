'use client';

import { motion } from "motion/react";

export const Motion = () => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          background: "#4F46E5",
          color: "white",
          padding: "12px 20px",
          borderRadius: 10,
          border: "none",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Hover me!
      </motion.button>
    </div>
  );
}