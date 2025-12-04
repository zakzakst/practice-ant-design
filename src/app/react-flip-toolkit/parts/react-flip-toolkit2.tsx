'use client'

import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

export const ReactFlipToolkit = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const shuffle = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return <div>
    <button onClick={shuffle}>Shuffle</button>
    <Flipper flipKey={items.join(',')}>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <Flipped key={item} flipId={item}>
            <li className="p-3 bg-gray-100 rounded shadow">Item {item}</li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  </div>
}