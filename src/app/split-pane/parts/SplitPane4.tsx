"use client";

import { SplitPane, Pane } from "react-split-pane";

export const SplitPaneComponent = () => {
  const snapPoints = [200, 400, 600];

  return (
    <div className="w-full h-screen">
      <SplitPane
        direction="horizontal"
        snapPoints={snapPoints}
        snapTolerance={20}
      >
        <Pane className="bg-purple-200" defaultSize="300px" minSize="100px">
          <div className="p-4">
            <h3 className="font-bold mb-2">スナップポイント</h3>
            <p className="text-sm">200px, 400px, 600px にサイズが吸着する</p>
          </div>
        </Pane>
        <Pane className="bg-orange-200">
          <div className="p-4">
            <p className="text-sm">ドラッグしてスナップ動作を確認</p>
            <div className="mt-4 text-xs text-gray-600">
              <p>snapTolerance: 20pxにより</p>
              <p>（20px以内に近づくと吸着）</p>
            </div>
          </div>
        </Pane>
      </SplitPane>
    </div>
  )
}
