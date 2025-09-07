"use client";

import { useRef, useState, useEffect } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Circle, Transformer } from "react-konva";
import type { Transformer as TransformerType } from "konva/lib/shapes/Transformer";

type ShapeId = string;

type Shape =
  | {
      id: ShapeId;
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
    }
  | {
      id: ShapeId;
      type: "circle";
      x: number;
      y: number;
      radius: number;
      fill: string;
    };

// Konva
export const KonvaPractice = () => {
  const [shapes, setShapes] = useState<Shape[]>([
    {
      id: "r1",
      type: "rect",
      x: 50,
      y: 60,
      width: 100,
      height: 100,
      fill: "skyblue",
    },
    {
      id: "c1",
      type: "circle",
      x: 250,
      y: 150,
      radius: 50,
      fill: "orange",
    },
  ]);
  const [selectedIds, setSelectedIds] = useState<ShapeId[]>([]);
  const transformerRef = useRef<TransformerType | null>(null);
  const shapeRefs = useRef<Record<string, Konva.Node>>({});

  const handleSelect = (id: ShapeId, e: Konva.KonvaEventObject<MouseEvent>) => {
    if (e.evt.shiftKey) {
      // Shiftキーが押されている場合の処理
      setSelectedIds((prev) =>
        prev?.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id],
      );
    } else {
      // 通常の処理
      setSelectedIds([id]);
    }
  };

  useEffect(() => {
    const transformer = transformerRef.current;
    if (transformer) {
      const nodes = selectedIds.map((id) => shapeRefs.current[id]);
      transformer.nodes(nodes);
      transformer.getLayer()?.batchDraw();
    }
  }, [selectedIds]);

  return (
    <div className="container p-4">
      <div className="mt-8">
        <Stage
          width={600}
          height={400}
          style={{ border: "1px solid gray", width: "fit-content" }}
          onClick={(e) => {
            // 背景をクリックした場合、選択解除
            if (e.target === e.target.getStage()) {
              setSelectedIds([]);
            }
          }}
        >
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
                    stroke={selectedIds.includes(shape.id) ? "blue" : undefined}
                    draggable
                    onClick={(e) => handleSelect(shape.id, e)}
                    onDragEnd={(e) => {
                      const { x, y } = e.target.position();
                      setShapes((prev) =>
                        prev.map((s) => (s.id === shape.id ? { ...s, x, y } : s)),
                      );
                    }}
                    ref={(node) => {
                      if (node) shapeRefs.current[shape.id] = node;
                    }}
                  />
                );
              }
              if (shape.type === "circle") {
                return (
                  <Circle
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    radius={shape.radius || 50}
                    fill={shape.fill}
                    stroke={selectedIds.includes(shape.id) ? "blue" : undefined}
                    draggable
                    onClick={(e) => handleSelect(shape.id, e)}
                    onDragEnd={(e) => {
                      const { x, y } = e.target.position();
                      setShapes((prev) =>
                        prev.map((s) => (s.id === shape.id ? { ...s, x, y } : s)),
                      );
                    }}
                    ref={(node) => {
                      if (node) shapeRefs.current[shape.id] = node;
                    }}
                  />
                );
              }
            })}
            <Transformer
              ref={transformerRef}
              rotateEnabled={true}
              resizeEnabled={true}
              boundBoxFunc={(oldBox, newBox) => {
                // 最小サイズ制限
                if (newBox.width < 20 || newBox.height < 20) {
                  return oldBox;
                }
                return newBox;
              }}
              onTransformEnd={() => {
                const newShapes = shapes.map((shape) => {
                  const node = shapeRefs.current[shape.id];
                  const scaleX = node.scaleX();
                  const scaleY = node.scaleY();
                  if (shape.type === "rect") {
                    const newWidth = Math.max(20, shape.width * scaleX);
                    const newHeight = Math.max(20, shape.height * scaleY);
                    node.scaleX(1);
                    node.scaleY(1);
                    return {
                      ...shape,
                      width: newWidth,
                      height: newHeight,
                    };
                  }
                  if (shape.type === "circle") {
                    const newRadius = Math.max(20, shape.radius * scaleX);
                    node.scaleX(1);
                    node.scaleY(1);
                    return { ...shape, radius: newRadius };
                  }
                  return shape;
                });
                setShapes(newShapes);
              }}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
