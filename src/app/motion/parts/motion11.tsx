'use client';

import { motion, useScroll } from "motion/react";

export const Motion = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 4,
          background: "#4F46E5",
          width: "100%",
          scaleX: scrollYProgress, // ← スクロール量がそのまま横幅に
          transformOrigin: "0% 50%",
        }}
      />

      <div style={{ height: "200vh", padding: 40 }}>Scroll Down</div>
    </div>
  );
}