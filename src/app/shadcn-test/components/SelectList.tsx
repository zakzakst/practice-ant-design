"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Combobox } from "./Combobox";
import type { Item } from "./Combobox";

type Props = {
  listItems: Item[];
  onChangeSelectedItems: (items: Item[]) => void;
  onChangeOpen?: (e: boolean) => void;
};

export const SelectList = ({
  listItems,
  onChangeSelectedItems,
  onChangeOpen,
}: Props) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const selectableItems = useMemo<Item[]>(() => {
    const targetItems = listItems.filter(
      (item) => !selectedItems.includes(item)
    );
    return targetItems;
  }, [listItems, selectedItems]);

  const onOpenChange = (e: boolean) => {
    setIsOpenDialog(e);
    if (onChangeOpen) onChangeOpen(e);
  };

  const onClickAdd = () => {
    const targetItem = listItems.find((item) => item.value === inputValue);
    if (!targetItem) return;
    const newSelectedItems = [...selectedItems, targetItem];
    setSelectedItems(newSelectedItems);
    setInputValue("");
    onChangeSelectedItems(newSelectedItems);
    setIsOpenDialog(false);
  };

  const onClickDelete = (deleteItem: Item) => {
    const targetItemIndex = listItems.indexOf(deleteItem);
    if (targetItemIndex === -1) return;
    const newSelectedItems = selectedItems.filter(
      (item) => item !== deleteItem
    );
    setSelectedItems(newSelectedItems);
    onChangeSelectedItems(newSelectedItems);
  };

  return (
    <>
      {Boolean(selectedItems.length) && (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.value}>
              {item.label}
              <span onClick={() => onClickDelete(item)}>（x）</span>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={isOpenDialog} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button>項目を追加</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>追加する項目を選択してください</DialogTitle>
            <DialogDescription>補足事項を選択</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Combobox
              value={inputValue}
              items={selectableItems}
              placeholder="項目を選択してください"
              emptyMessage="選択肢がありません"
              onChangeValue={setInputValue}
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button variant="secondary">キャンセル</Button>
            </DialogClose>
            <Button onClick={() => onClickAdd()}>追加</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
