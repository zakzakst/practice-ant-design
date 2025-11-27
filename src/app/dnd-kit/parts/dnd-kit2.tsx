'use client'

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState, useId } from "react";

const DraggableItem = () => {
  const id = useId();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style = {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
    borderRadius: 8,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  }

  return <div ref={setNodeRef} style={style} {...listeners} {...attributes} />
}

const DroppableArea = ({ isDropped }: { isDropped: boolean }) => {
  // const id = useId();
  const { setNodeRef, isOver } = useDroppable({
    id: 'drop-zone',
  });

  const style = {
    width: 200,
    height: 200,
    border: "2px dashed #666",
    borderRadius: 12,
    backgroundColor: isDropped ? "gold" : isOver ? "#f0f0f0" : "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      Drop Here
    </div>
  );
}

export const DndKit = () => {
  const [isDropped, setIsDropped] = useState(false);

  return <div>
    <DndContext
      onDragEnd={({ over }) => {
        if (over && over.id === 'drop-zone') {
          setIsDropped(true);
        }
      }}
    >
      <DraggableItem />
      <DroppableArea isDropped={isDropped} />
    </DndContext>
  </div>
}