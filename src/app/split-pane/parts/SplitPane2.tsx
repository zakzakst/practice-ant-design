'use client';

import { useState } from "react";
import { SplitPane, Pane } from 'react-split-pane';

export const SplitPaneComponent = () => {
  const [sizes, setSizes] = useState([300, 500]);

  return (
    <div className="w-full h-screen">
      <SplitPane direction="horizontal" onResize={setSizes}>
        <Pane className="bg-blue-200 p-4" size={sizes[0]}>
          <p>Controlledモード: useStateでサイズ管理</p>
          <p className="text-sm text-gray-600">
            サイズ: {Math.round(sizes[0])}px
          </p>
          <button
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setSizes([300, 500])}
          >
            リセット
          </button>
        </Pane>
        <Pane className="bg-green-200 p-4" size={sizes[1]}>
          <p className="text-sm text-gray-600">
            サイズ: {Math.round(sizes[1])}px
          </p>
        </Pane>
      </SplitPane>
    </div>
  );
}
