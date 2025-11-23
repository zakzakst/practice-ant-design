'use client'

import { useState } from "react"
import clsx from "clsx"

type ImageItem = {
  id: string;
  url: string;
}

export const DragDrop = () => {
  const [images, setImages] = useState<ImageItem[]>([
    {
      id: '1',
      url: 'https://placehold.jp/ff0000/ffffff/150x150.png',
    },
    {
      id: '2',
      url: 'https://placehold.jp/00ff00/ffffff/150x150.png',
    },
    {
      id: '3',
      url: 'https://placehold.jp/0000ff/ffffff/150x150.png',
    },
  ])

  const [draggingId, setDraggingId] = useState<string | null>(null)

  const handleDragStart = (id: string) => {
    setDraggingId(id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, overId: string) => {
    e.preventDefault();

    if (!draggingId || draggingId === overId) return;

    setImages((prev) => {
      const newItems = [...prev];
      const fromIndex = newItems.findIndex((i) => i.id === draggingId);
      const toIndex = newItems.findIndex((i) => i.id === overId);
      // 位置を入れ替え
      const [removed] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, removed);
      return newItems;
    })
  }

  const handleDragEnd = () => {
    setDraggingId(null)
  }

  return <div className="flex gap-3">
    {images.map((image) => (
      <div
        key={image.id}
        draggable
        onDragStart={() => handleDragStart(image.id)}
        onDragOver={(e) => handleDragOver(e, image.id)}
        onDragEnd={handleDragEnd}
        className={clsx(
          "w-32 h-32 bg-cover cursor-grab",
          image.id === draggingId && 'opacity-50'
        )}
        style={{
          backgroundImage: `url(${image.url})`
        }}
      />
    ))}
  </div>
}