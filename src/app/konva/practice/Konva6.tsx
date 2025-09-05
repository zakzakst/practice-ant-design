"use client";

import { Stage, Layer, Line } from "react-konva";

// Konva
export const KonvaPractice = () => {
  return (
    <div className="container p-4">
      <h1>Line</h1>
      <div className="mt-8">
        <Stage
          width={600}
          height={400}
          style={{ border: "1px solid gray", width: "fit-content" }}
        >
          <Layer>
            {/* 直線 */}
            <Line points={[50, 50, 200, 150]} stroke="red" strokeWidth={4} />
            {/* 折れ線 */}
            <Line
              points={[250, 50, 300, 150, 400, 100]}
              stroke="blue"
              strokeWidth={3}
            />
            {/* 閉じた多角形（closed） */}
            <Line
              points={[100, 200, 180, 250, 160, 320, 60, 300]}
              fill="lightgreen"
              stroke="green"
              strokeWidth={2}
              closed
            />
            {/* 曲線（tensionを指定） */}
            <Line
              points={[250, 200, 320, 250, 380, 220, 450, 280]}
              stroke="purple"
              strokeWidth={3}
              tension={0.5} // 曲線補間
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
