"use client";

import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Circle, Transformer } from "react-konva";

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

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const trRef = useRef<any>(null);

  const attachTransformer = (node: any) => {
    const transformer = trRef.current;
    if (transformer && node) {
      transformer.nodes([node]);
      transformer.getLayer()?.batchDraw();
    }
  };

  // const handleClick = (id: string) => {
  //   setShapes((prev) =>
  //     prev.map((shape) =>
  //       shape.id === id
  //         ? { ...shape, fill: shape.fill === "blue" ? "orange" : "blue" }
  //         : shape
  //     )
  //   );
  // };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete" && selectedId) {
        setShapes((prev) => prev.filter((shape) => shape.id !== selectedId));
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
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
        <Stage
          width={600}
          height={400}
          onClick={(e) => {
            // 背景をクリックした場合、選択解除
            if (e.target === e.target.getStage()) {
              setSelectedId(null);
            }
          }}
          style={{ border: "1px solid gray" }}
        >
          <Layer>
            {shapes.map((shape) => {
              const isSelected = shape.id === selectedId;

              if (shape.type === "rect") {
                return (
                  <Rect
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    fill={shape.fill}
                    stroke={isSelected ? "red" : undefined}
                    strokeWidth={isSelected ? 4 : 0}
                    draggable
                    // onClick={() => handleClick(shape.id)}
                    onClick={() => handleSelect(shape.id)}
                    onDragEnd={(e) =>
                      handleDragEnd(shape.id, e.target.x(), e.target.y())
                    }
                    ref={
                      shape.id === selectedId ? attachTransformer : undefined
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
                    stroke={isSelected ? "red" : undefined}
                    strokeWidth={isSelected ? 4 : 0}
                    draggable
                    // onClick={() => handleClick(shape.id)}
                    onClick={() => handleSelect(shape.id)}
                    onDragEnd={(e) =>
                      handleDragEnd(shape.id, e.target.x(), e.target.y())
                    }
                    ref={
                      shape.id === selectedId ? attachTransformer : undefined
                    }
                  />
                );
              }
            })}
            <Transformer
              ref={trRef}
              rotateEnabled={true}
              resizeEnabled={true}
              boundBoxFunc={(oldBox, newBox) => {
                // 最小サイズ制限
                if (newBox.width < 20 || newBox.height < 20) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
