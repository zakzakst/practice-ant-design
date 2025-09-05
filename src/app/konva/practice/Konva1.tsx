"use client";

import { Stage, Layer, Rect, Circle, Text } from "react-konva";

// Konva
export const Konva = () => {
  return (
    <div className="container p-4">
      <h1>最小のサンプル</h1>
      <div className="mt-8">
        <Stage width={500} height={500}>
          <Layer>
            {/* 四角形 */}
            <Rect
              x={50}
              y={50}
              width={100}
              height={100}
              fill="blue"
              shadowBlur={10}
            />
            {/* 円 */}
            <Circle
              x={250}
              y={100}
              radius={50}
              fill="green"
              stroke="black"
              strokeWidth={4}
            />
            {/* テキスト */}
            <Text
              x={50}
              y={200}
              text="こんにちは react-konva!"
              fontSize={24}
              fill="red"
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
