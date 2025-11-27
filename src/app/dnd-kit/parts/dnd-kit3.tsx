'use client'
import {
  DndContext,
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
}

const SortableItem = ({ id, label }: Item) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    padding: "12px 16px",
    marginBottom: 8,
    backgroundColor: isDragging ? "#d1e7ff" : "white",
    border: "1px solid #ccc",
    borderRadius: 8,
    cursor: "grab",
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{label}</div>
}

export const DndKit = () => {
  const [items, setItems] = useState<Item[]>([
    { id: "A", label: "Item A" },
    { id: "B", label: "Item B" },
    { id: "C", label: "Item C" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 5px動いたらドラッグ開始
      },
    })
  );

  return <div>
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items.findIndex((i) => i.id === active.id);
            const newIndex = items.findIndex((i) => i.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
          })
        }
      }}
    >
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => <SortableItem key={item.id} id={item.id} label={item.label} />)}
      </SortableContext>
    </DndContext>
  </div>
}