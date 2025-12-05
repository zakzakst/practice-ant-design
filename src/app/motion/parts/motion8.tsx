'use client';

import { motion } from "motion/react";
import { useState } from "react";

export const Motion = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const shuffle = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <button onClick={shuffle}>Reverse List</button>
      
      <div style={{ display: "flex", gap: 16 }}>
        {items.map((n) => (
          <motion.div
            key={n}
            layout
            transition={{ duration: 0.5 }}
            style={{
              width: 80,
              height: 80,
              background: "#4F46E5",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
            }}
          >
            {n}
          </motion.div>
        ))}
      </div>
    </div>
  );
}