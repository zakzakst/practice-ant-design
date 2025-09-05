"use client";

import { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

type Shape =
  | {
      id: string;
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
    }
  | {
      id: string;
      type: "circle";
      x: number;
      y: number;
      radius: number;
      fill: string;
    };

// Konva
export const Konva = () => {
  const [shapes, setShapes] = useState<Shape[]>([
    {
      id: "r1",
      type: "rect",
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: "blue",
    },
    { id: "c1", type: "circle", x: 250, y: 100, radius: 50, fill: "green" },
    { id: "c2", type: "circle", x: 400, y: 300, radius: 40, fill: "purple" },
  ]);

  const handleClick = (id: string) => {
    setShapes((prev) =>
      prev.map((shape) =>
        shape.id === id
          ? { ...shape, fill: shape.fill === "blue" ? "orange" : "blue" }
          : shape
      )
    );
  };

  const handleDragEnd = (id: string, x: number, y: number) => {
    setShapes((prev) =>
      prev.map((shape) => (shape.id === id ? { ...shape, x, y } : shape))
    );
  };

  return (
    <div className="container p-4">
      <h1>react-konva 複数図形管理</h1>
      <div className="mt-8">
        <Stage width={600} height={400}>
          <Layer>
            {shapes.map((shape) => {
              if (shape.type === "rect") {
                return (
                  <Rect
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    fill={shape.fill}
                    draggable
                    onClick={() => handleClick(shape.id)}
                    onDragEnd={(e) =>
                      handleDragEnd(shape.id, e.target.x(), e.target.y())
                    }
                  />
                );
              }
              if (shape.type === "circle") {
                return (
                  <Circle
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    radius={shape.radius}
                    fill={shape.fill}
                    draggable
                    onClick={() => handleClick(shape.id)}
                    onDragEnd={(e) =>
                      handleDragEnd(shape.id, e.target.x(), e.target.y())
                    }
                  />
                );
              }
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
