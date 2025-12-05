'use client'

import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

export const ReactFlipToolkit = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    const max = Math.max(...items);
    setItems([...items, max + 1]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i !== id));
  };

  return <div>
    <button onClick={addItem}>Add Item</button>
    <Flipper flipKey={items.join(',')}>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <Flipped
            key={item}
            flipId={item}
            onAppear={(el) => {
              el.style.opacity = "0";
              el.style.transform = "scale(0.8)";
              requestAnimationFrame(() => {
                el.style.transition = "all 300ms";
                el.style.opacity = "1";
                el.style.transform = "scale(1)";
              });
            }}
            onExit={(el, index, removeElement) => {
              el.style.transition = "all 300ms";
              el.style.opacity = "0";
              el.style.transform = "scale(0.8)";
              setTimeout(removeElement, 300);
            }}
          >
            <li className="p-3 bg-gray-100 rounded shadow">
              Item {item}
              <button
                onClick={() => removeItem(item)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  </div>
}