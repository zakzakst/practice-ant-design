'use client'

import { useDraggable } from "@dnd-kit/core";

export const DndKit = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-box",
  });

  const style = {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
    borderRadius: 8,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} />
  );
}