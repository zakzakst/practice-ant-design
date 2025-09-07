"use client";
import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ItemType = {
  id: string;
  label: string;
};

type Content = {
  id: string;
  text: string;
};

const ItemTypes: ItemType[] = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: `item-${index + 1}`,
    label: `項目${index + 1}`,
  }));

const Contents: Content[] = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: `content-${index + 1}`,
    text: `内容${index + 1}の説明が入ります`,
  }));

const Page = () => {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("item-id");

  const headRowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (!itemId) return;
    const headRowEl = headRowRef.current;
    const firstCellEl = headRowRef.current?.querySelector("th");
    const targetCellEl = headRowRef.current?.querySelector(`th[data-item-id="${itemId}"]`);
    const tableContainerEl = headRowEl?.closest("div");
    if (!headRowEl || !firstCellEl || !targetCellEl || !tableContainerEl) return;
    const headRowRect = headRowEl.getBoundingClientRect();
    const targetCellRect = targetCellEl?.getBoundingClientRect();
    const tableXOffset = targetCellRect.x - headRowRect.x - firstCellEl.clientWidth;
    tableContainerEl.scrollLeft = tableXOffset;
  }, []);

  return (
    <div className="container mx-auto [&>div]:max-h-[480px]">
      <Table className="w-max">
        <TableHeader>
          <TableRow ref={headRowRef}>
            <TableHead className="sticky left-0 top-0 z-10 bg-white"></TableHead>
            {ItemTypes.map((itemType) => (
              <TableHead
                key={itemType.id}
                className={clsx("sticky top-0 bg-white", itemId === itemType.id && "bg-[#fcc]")}
                data-item-id={itemType.id}
              >
                {itemType.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Contents.map((content) => (
            <TableRow key={content.id}>
              <TableCell className="sticky left-0 bg-white">{content.text}</TableCell>
              {ItemTypes.map((itemType) => (
                <TableCell
                  key={`${content.id}-${itemType.id}`}
                  className={clsx("text-center", itemId === itemType.id && "bg-[#fcc]")}
                >
                  〇
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
