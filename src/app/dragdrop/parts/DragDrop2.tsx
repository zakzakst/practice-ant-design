'use client'

import React, { useRef, useState } from "react";
import './style2.css'

export const DragDrop: React.FC = () => {
  const [items, setItems] = useState([
    'https://placehold.jp/ff0000/ffffff/150x150.png',
    'https://placehold.jp/00ff00/ffffff/150x150.png',
    'https://placehold.jp/0000ff/ffffff/150x150.png',
  ]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dragItemRef = useRef<HTMLDivElement | null>(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const el = e.currentTarget;
    dragItemRef.current = el;

    const rect = el.getBoundingClientRect();
    offsetX.current = e.clientX - rect.left;
    offsetY.current = e.clientY - rect.top;

    el.classList.add("dragging");

    document.body.appendChild(el);
    moveAt(e.pageX, e.pageY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const el = dragItemRef.current;
    if (!el) return;

    moveAt(e.pageX, e.pageY);
    checkSwap(el);
  };

  const handleMouseUp = () => {
    const el = dragItemRef.current;
    if (!el || !containerRef.current) return;

    el.classList.remove("dragging");
    containerRef.current.appendChild(el);

    el.style.left = "";
    el.style.top = "";

    dragItemRef.current = null;

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const moveAt = (pageX: number, pageY: number) => {
    const el = dragItemRef.current;
    if (!el) return;
    el.style.left = pageX - offsetX.current + "px";
    el.style.top = pageY - offsetY.current + "px";
  };

  const checkSwap = (dragEl: HTMLDivElement) => {
    if (!containerRef.current) return;

    const dragRect = dragEl.getBoundingClientRect();
    const centerX = dragRect.left + dragRect.width / 2;
    const centerY = dragRect.top + dragRect.height / 2;

    const nodes = Array.from(containerRef.current.children) as HTMLDivElement[];

    for (const node of nodes) {
      if (node === dragEl) continue;

      const rect = node.getBoundingClientRect();
      const isInside =
        centerX > rect.left &&
        centerX < rect.right &&
        centerY > rect.top &&
        centerY < rect.bottom;

      if (isInside) {
        const dragIndex = nodes.indexOf(dragEl);
        const targetIndex = nodes.indexOf(node);

        const newItems = [...items];
        const [removed] = newItems.splice(dragIndex, 1);
        newItems.splice(targetIndex, 0, removed);

        setItems(newItems);

        break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ display: "flex", gap: "12px" }}
    >
      {items.map((src, i) => (
        <div
          key={src}
          onMouseDown={(e) => handleMouseDown(e, i)}
          className="img-box"
          style={{
            width: 100,
            height: 100,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #ddd",
            cursor: "grab",
            position: "relative",
          }}
        />
      ))}
    </div>
  );
};
