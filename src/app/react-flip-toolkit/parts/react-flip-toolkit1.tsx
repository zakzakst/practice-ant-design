'use client'

import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

export const ReactFlipToolkit = () => {
  const [isMoved, setIsMoved] = useState(false);

  return <div>
    <button onClick={() => setIsMoved((prev) => !prev)}>Move Box</button>

    <Flipper flipKey={isMoved}>
      <Flipped flipId="box">
        <div
          className={`mt-10 w-32 h-32 bg-red-500 transition-all ${
            isMoved ? "ml-40" : "ml-0"
          }`}
        />
      </Flipped>
    </Flipper>
  </div>
}