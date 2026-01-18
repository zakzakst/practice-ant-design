"use client";

import dynamic from "next/dynamic";
import { SplitPane, Pane } from "react-split-pane";
import { usePersistence } from "react-split-pane/persistence";

export const SplitPaneComponent = dynamic(
  () =>
    Promise.resolve(function Content() {
      const [sizes, setSizes] = usePersistence({ key: "my-layout" });

      return (
        <div className="w-full h-screen">
          <SplitPane direction="horizontal" onResize={setSizes}>
            <Pane className="bg-blue-200" size={sizes[0] || 300}>
              <div className="p-4">
                <h3 className="font-bold">サイズの永続化</h3>
                <p className="text-sm">usePersistenceフックを使用</p>
              </div>
            </Pane>
            <Pane className="bg-green-200" size={sizes[1]}>
              <div className="p-4">
                <p className="text-sm">リロードしてもサイズ維持</p>
              </div>
            </Pane>
          </SplitPane>
        </div>
      );
    }),
  { ssr: false }
);
