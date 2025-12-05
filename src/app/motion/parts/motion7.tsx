'use client';

import { motion } from "motion/react";
import { useState } from "react";

export const Motion = () => {
  const [isBig, setIsBig] = useState(false);

  return (
    <div>
      <button onClick={() => setIsBig((prev) => !prev)}>Toggle Layout</button>

      <motion.div
        layout
        transition={{ duration: 0.5 }}
        style={{
          width: isBig ? 300 : 150,
          height: isBig ? 150 : 80,
          background: "#4F46E5",
          borderRadius: 16,
        }}
      />
    </div>
  );
}