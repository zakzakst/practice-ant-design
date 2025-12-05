'use client'

import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

export const ReactFlipToolkit = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return <div>
    <button onClick={shuffle}>Shuffle</button>
    <Flipper
      flipKey={items.join(',')}
      staggerConfig={{ default: { speed: 0.75 } }}
      spring="gentle"
    >
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <Flipped
            key={item}
            flipId={item}
            stagger
            onAppear={(el) => {
              el.style.opacity = "0";
              el.style.transform = "scale(0.9)";
              requestAnimationFrame(() => {
                el.style.transition = "all 300ms";
                el.style.opacity = "1";
                el.style.transform = "scale(1)";
              });
            }}
          >
            <li className="p-3 bg-gray-100 rounded shadow">Item {item}</li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  </div>
}