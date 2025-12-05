'use client';

import { motion } from "motion/react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Motion = () => {
  return (
    <div>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          listStyle: "none",
          padding: 0,
        }}
      >
        {[1, 2, 3, 4].map((n) => (
          <motion.li
            key={n}
            variants={itemVariants}
            style={{
              background: "#4F46E5",
              color: "white",
              padding: "16px 20px",
              borderRadius: 12,
              fontSize: 18,
            }}
          >
            Item {n}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}