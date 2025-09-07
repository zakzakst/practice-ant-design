"use client";

import { useState, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Line } from "react-konva";

type LineType = {
  id: string;
  points: number[];
  color: string;
};

// Konva
export const KonvaPractice = () => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef<Konva.Stage | null>(null);

  const handleMouseDown = () => {
    setIsDrawing(true);
    const stage = stageRef.current;
    const pos = stage?.getPointerPosition();
    if (!pos) return;
    setLines([...lines, { id: `line-${lines.length}`, points: [pos.x, pos.y], color: "black" }]);
  };

  const handleMouseMove = () => {
    if (!isDrawing) return;
    const stage = stageRef.current;
    const pos = stage?.getPointerPosition();
    if (!pos) return;
    // 最後のlineに座標を追加
    const lastLine = lines[lines.length - 1];
    const newPoints = [...lastLine.points, pos.x, pos.y];
    const updatedLines = [...lines];
    updatedLines[updatedLines.length - 1] = {
      ...lastLine,
      points: newPoints,
    };
    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="container p-4">
      <h1>フリーライン</h1>
      <div className="mt-8">
        <Stage
          width={600}
          height={400}
          style={{ border: "1px solid gray", width: "fit-content" }}
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            {lines.map((line) => (
              <Line
                key={line.id}
                points={line.points}
                stroke={line.color}
                strokeWidth={3}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
