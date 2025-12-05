'use client';

import { motion } from "motion/react";
import { useState } from "react";

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Motion = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle
      </button>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        style={{
          background: "#4F46E5",
          width: 200,
          height: 100,
          borderRadius: 12,
        }}
      />
    </div>
  );
}