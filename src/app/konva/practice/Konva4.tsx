"use client";

import { useRef, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Circle, Transformer } from "react-konva";
import type { Transformer as TransformerType } from "konva/lib/shapes/Transformer";

type Shape =
  | {
      id: number;
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
    }
  | {
      id: number;
      type: "circle";
      x: number;
      y: number;
      radius: number;
      fill: string;
    };

export const KonvaPractice = () => {
  const [shapes, setShapes] = useState<Shape[]>([
    {
      id: 1,
      type: "rect",
      x: 50,
      y: 60,
      width: 100,
      height: 100,
      fill: "skyblue",
    },
    {
      id: 2,
      type: "circle",
      x: 250,
      y: 150,
      radius: 50,
      fill: "orange",
    },
  ]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const trRef = useRef<TransformerType | null>(null);

  const handleTransformEnd = (
    node: Konva.Node,
    id: number,
    type: "rect" | "circle"
  ) => {
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    setShapes((prev) =>
      prev.map((shape) => {
        if (shape.id !== id) return shape;
        if (type === "rect" && shape.type === "rect") {
          const newWidth = Math.max(20, shape.width * scaleX);
          const newHeight = Math.max(20, shape.height * scaleY);
          node.scaleX(1);
          node.scaleY(1);
          return { ...shape, width: newWidth, height: newHeight };
        }
        if (type === "circle" && shape.type === "circle") {
          const newRadius = Math.max(20, shape.radius * scaleX);
          node.scaleX(1);
          node.scaleY(1);
          return { ...shape, radius: newRadius };
        }
        return shape;
      })
    );
  };

  // Transformer を選択した図形にアタッチ
  const attachTransformer = (node: Konva.Node | null) => {
    const transformer = trRef.current;
    if (!transformer) return;
    if (node) {
      transformer.nodes([node]);
    } else {
      transformer.nodes([]);
    }
    transformer.getLayer()?.batchDraw();
  };

  return (
    <div>
      <Stage
        width={600}
        height={400}
        style={{ border: "1px solid gray", width: "fit-content" }}
        onClick={(e) => {
          // 背景をクリックした場合、選択解除
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {shapes.map((shape) =>
            shape.type === "rect" ? (
              <Rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill={shape.fill}
                draggable
                onClick={() => setSelectedId(shape.id)}
                onDragEnd={(e) => {
                  const { x, y } = e.target.position();
                  setShapes((prev) =>
                    prev.map((s) => (s.id === shape.id ? { ...s, x, y } : s))
                  );
                }}
                onTransformEnd={(e) =>
                  handleTransformEnd(e.target, shape.id, "rect")
                }
                ref={shape.id === selectedId ? attachTransformer : undefined}
              />
            ) : (
              <Circle
                key={shape.id}
                x={shape.x}
                y={shape.y}
                radius={shape.radius || 50}
                fill={shape.fill}
                draggable
                onClick={() => setSelectedId(shape.id)}
                onDragEnd={(e) => {
                  const { x, y } = e.target.position();
                  setShapes((prev) =>
                    prev.map((s) => (s.id === shape.id ? { ...s, x, y } : s))
                  );
                }}
                onTransformEnd={(e) =>
                  handleTransformEnd(e.target, shape.id, "circle")
                }
                ref={shape.id === selectedId ? attachTransformer : undefined}
              />
            )
          )}
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
  );
};
