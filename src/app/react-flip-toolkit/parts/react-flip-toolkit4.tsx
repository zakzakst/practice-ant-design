'use client'

import { Flipper, Flipped } from "react-flip-toolkit";
import { useState } from "react";

type Item = {
  id: number;
  title: string;
};

const items: Item[] = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
];

export const ReactFlipToolkit = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeItem = items.find((i) => i.id === activeId);

  return <div>
    <Flipper flipKey={activeId} element="div" className="p-8">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <Flipped key={item.id} flipId={`card-${item.id}`}>
            <div
              className="p-6 bg-gray-100 rounded shadow cursor-pointer"
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </div>
          </Flipped>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Flipped flipId={`card-${activeItem.id}`}>
            <div className="bg-white p-8 rounded shadow-lg w-96 relative">
              <h2 className="text-xl font-bold mb-4">{activeItem.title}</h2>
              <p className="mb-4 text-gray-600">
                This is detailed content.
              </p>

              <button
                onClick={() => setActiveId(null)}
                className="absolute top-2 right-2 text-sm bg-red-500 text-white px-2 py-1 rounded"
              >
                Close
              </button>
            </div>
          </Flipped>
        </div>
      )}
    </Flipper>
  </div>
}