"use client";

import { useEffect, useState, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";

// Konva
export const KonvaPractice = () => {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = "https://konvajs.org/assets/lion.png";
    image.onload = () => {
      setImg(image);
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const containerEl = containerRef.current;
      if (!containerEl) return;
      setSize({
        width: containerEl.clientWidth,
        height: containerEl.clientWidth,
        // height: containerEl.clientHeight,
      });
      // setSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
      // const { width, height } = containerEl.getBoundingClientRect();
      // setSize({ width, height });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="container p-4">
      <h1>画像</h1>
      <div className="mt-8 max-w-[600px]" ref={containerRef}>
        <Stage
          width={size.width}
          height={size.height}
          style={{ border: "1px solid black", width: "fit-content" }}
        >
          <Layer>
            {img && (
              <Image
                image={img}
                x={50}
                y={50}
                width={200}
                height={150}
                draggable
                alt=""
                onDragEnd={() => {}}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
