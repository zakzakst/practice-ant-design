'use client'

import { DndKit } from "./parts/dnd-kit1"

import { DndContext } from "@dnd-kit/core";

const Page = () => {
  return <div>
    <DndContext>
      <DndKit />
    </DndContext>
  </div>
}

export default Page