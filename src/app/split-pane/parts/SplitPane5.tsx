'use client';

import { SplitPane, Pane } from "react-split-pane";
import type { DividerProps } from "react-split-pane";
import { GripVertical } from "lucide-react";

const CustomDivider = ({
  isDragging,
  direction,
  currentSize,
  minSize,
  maxSize,
  index,
  disabled,
  ...domProps
}: DividerProps) => (
  <div
    {...domProps}
    className={`w-3 h-full cursor-col-resize flex items-center justify-center
      ${isDragging ? "bg-blue-400" : "bg-gray-100 hover:bg-gray-200"}`}
  >
    <GripVertical
      size={12}
      className={isDragging ? "text-white" : "text-gray-400"}
    />
  </div>
);

export const SplitPaneComponent = () => {
  return (
    <div className="w-full h-screen">
      <SplitPane direction="horizontal" divider={CustomDivider}>
        <Pane className="bg-slate-50 p-4" defaultSize="300px">
          <p className="text-m text-gray-600">縦線: カスタムDivider</p>
          <p className="text-sm text-gray-400">
            アイコン表示 / ドラッグ中は青+白アイコン
          </p>
        </Pane>
        <Pane>
          <SplitPane
            direction="vertical"
            dividerClassName="!h-3 !w-full cursor-ns-resize bg-gray-100 hover:bg-gray-500"
          >
            <Pane className="bg-slate-100 p-4" defaultSize="50%">
              <p className="text-m text-gray-600">横線: dividerClassName</p>
              <p className="text-sm text-gray-400">
                Tailwindのみ / ホバーで色変化
              </p>
            </Pane>
            <Pane className="bg-slate-200 p-4">
              <p className="text-m text-gray-600">下部</p>
            </Pane>
          </SplitPane>
        </Pane>
      </SplitPane>
    </div>
  )
}
