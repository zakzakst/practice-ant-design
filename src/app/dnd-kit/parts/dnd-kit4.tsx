'use client'

import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type Item = {
  id: string;
  label: string;
};

const SortableItem = ({ id, label }: Item) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return <div
    ref={setNodeRef}
    style={{
      padding: 12,
      marginBottom: 8,
      background: "#fff",
      borderRadius: 8,
      border: "1px solid #ccc",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      opacity: isDragging ? 0 : 1,
      transition,
      transform: CSS.Transform.toString(transform),
    }}
  >
    <span>{label}</span>
    <button
      {...listeners}
      {...attributes}
      style={{
        cursor: "grab",
        padding: 4,
        background: "transparent",
        border: "none",
        fontSize: 20,
      }}
    >☰</button>
  </div>
}

const OverlayItem = ({ label }: { label: string }) => {
  return (
    <div
      style={{
        padding: 12,
        background: "gold",
        borderRadius: 8,
        border: "1px solid #ccc",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {label}
    </div>
  );
}

export const DndKit = () => {
  const [items, setItems] = useState<Item[]>([
    { id: "A", label: "Task A" },
    { id: "B", label: "Task B" },
    { id: "C", label: "Task C" },
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));
  const activeItem = items.find((i) => i.id === activeId);

  return <div>
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(e) => setActiveId(e.active.id as string)}
      onDragEnd={(({ active, over }) => {
        if (active && over && active.id !== over.id) {
          setItems((prev) => {
              const oldIndex = prev.findIndex((i) => i.id === active.id);
              const newIndex = prev.findIndex((i) => i.id === over.id);
              return arrayMove(prev, oldIndex, newIndex);
          })
        }
        setActiveId(null)
      })}
      onDragCancel={(() => setActiveId(null))}
    >
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => <SortableItem key={item.id} {...item} />)}
      </SortableContext>
      <DragOverlay>
        {activeItem ? <OverlayItem label={activeItem.label} /> : null}
      </DragOverlay>
    </DndContext>
  </div>
}