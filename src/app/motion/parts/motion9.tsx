'use client';

import { motion } from "motion/react";
import { useState } from "react";

const tabs = ["Home", "Profile", "Settings"];

export const Motion = () => {
  const [current, setCurrent] = useState("Home");

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setCurrent(tab)}
          style={{ position: "relative", paddingBottom: 8, cursor: "pointer" }}
        >
          {tab}
          {current === tab && (
            <motion.div
              layoutId="underline"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 3,
                background: "#4F46E5",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}