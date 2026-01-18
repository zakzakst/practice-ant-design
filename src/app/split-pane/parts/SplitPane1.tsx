'use client';

import { SplitPane, Pane } from 'react-split-pane';

export const SplitPaneComponent = () => {
  return (
    <div className="w-full h-screen">
      <SplitPane direction="vertical">
        <Pane defaultSize="50%" minSize={200} maxSize="70%" className='p-4 bg-gray-200'>
          上ペイン
        </Pane>
        <Pane className='p-4'>
          下ペイン
        </Pane>
      </SplitPane>
    </div>
  )
}
