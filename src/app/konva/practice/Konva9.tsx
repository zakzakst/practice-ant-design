"use client";

import { useRef, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";

// Konva
export const KonvaPractice = () => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const [scale, setScale] = useState(1);

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    if (!stage) return;
    const oldScale = stage.scaleX();

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const scaleBy = 1.1;
    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    setScale(newScale);

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
  };

  return (
    <div className="container p-4">
      <h1>Zoom機能</h1>
      <div className="mt-8">
        <Stage
          ref={stageRef}
          width={600}
          height={400}
          style={{ border: "1px solid black", width: "fit-content" }}
          onWheel={handleWheel}
          scale={{ x: scale, y: scale }}
          draggable
        >
          <Layer>
            <Rect x={50} y={50} width={100} height={100} fill="skyblue" draggable />
            <Rect x={200} y={150} width={150} height={100} fill="orange" draggable />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
