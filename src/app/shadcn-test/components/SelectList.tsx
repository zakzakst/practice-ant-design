"use client";

import { useState } from "react";
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
  selectedItems: Item[];
  onAddSelectedItem: (item: Item) => void;
  onDeleteSelectedItem: (item: Item) => void;
};

export const SelectList = ({
  listItems,
  selectedItems,
  onDeleteSelectedItem,
  onAddSelectedItem,
}: Props) => {
  // 1. モーダルを開く
  // 2. コンボボックスの選択肢が設定される
  // 3. 「追加」ボタンをクリックしたら、選択中の項目がリストに追加されてモーダルが閉じる
  // const [isOpen, setIsOpen] = useState(false);
  // TODO: 追加済の項目はlistに表示しない
  const [selectedValue, setSelectedValue] = useState("");
  const onClickAdd = () => {
    const targetItem = listItems.find((item) => item.value === selectedValue);
    if (targetItem) {
      onAddSelectedItem(targetItem);
    }
  };

  return (
    <>
      {selectedItems.length && (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.value}>
              {item.label}
              <span onClick={() => onDeleteSelectedItem(item)}>x</span>
            </li>
          ))}
        </ul>
      )}
      <Dialog>
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
              items={listItems}
              placeholder="項目を選択してください"
              emptyMessage="選択肢がありません"
              onChangeValue={setSelectedValue}
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
