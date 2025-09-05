"use client";

import { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

// Konva
export const Konva = () => {
  const [rectColor, setRectColor] = useState("blue");

  return (
    <div className="container p-4">
      <h1>react-konva イベント練習</h1>
      <div className="mt-8">
        <Stage width={500} height={500}>
          <Layer>
            <Rect
              x={50}
              y={50}
              width={100}
              height={100}
              fill={rectColor}
              shadowBlur={10}
              onClick={() => {
                setRectColor(rectColor === "blue" ? "orange" : "blue");
              }}
            />
            <Circle
              x={250}
              y={100}
              radius={50}
              fill="green"
              draggable
              onDragStart={(e) => {
                // window.alert("test");
                console.log("ドラッグ開始：", e.target.x(), e.target.y());
              }}
              onDragMove={(e) => {
                console.log("移動中：", e.target.x(), e.target.y());
              }}
              onDragEnd={(e) => {
                console.log("ドラッグ終了：", e.target.x(), e.target.y());
              }}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
