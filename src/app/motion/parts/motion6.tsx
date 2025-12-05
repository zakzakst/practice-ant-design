'use client';

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const Motion = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Box</button>

      <AnimatePresence>
        {show && (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{
              width: 200,
              height: 120,
              background: "#4F46E5",
              borderRadius: 12,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}