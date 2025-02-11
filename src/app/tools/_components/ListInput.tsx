"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type ListInputItem = string;

type Props = {
  items: ListInputItem[];
  onChange: (items: string[]) => void;
};

const ListInput = ({ items, onChange }: Props) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    onChange([...items, inputValue]);
    setInputValue("");
  };

  const deleteItem = (index: number) => {
    onChange(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => deleteItem(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      {isShowInput ? (
        <>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button size="sm" disabled={!inputValue} onClick={() => addItem()}>
            リストに追加
          </Button>
          <Button size="sm" onClick={() => setIsShowInput(false)}>
            入力欄を隠す
          </Button>
        </>
      ) : (
        <Button size="sm" onClick={() => setIsShowInput(true)}>
          入力欄を表示
        </Button>
      )}
    </div>
  );
};

export default ListInput;
