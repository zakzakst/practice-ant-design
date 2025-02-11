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
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {items.length > 0 && (
        <ul className="list-disc list-inside grid gap-0 mb-2">
          {items.map((item, index) => (
            <li key={index}>
              <span className="inline-flex items-center gap-2">
                {item}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => deleteItem(index)}
                  className="w-6 h-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </span>
            </li>
          ))}
        </ul>
      )}
      {isShowInput ? (
        <>
          <div>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="mt-2 flex gap-2">
            <Button size="sm" disabled={!inputValue} onClick={() => addItem()}>
              リストに追加
            </Button>
            <Button size="sm" onClick={() => setIsShowInput(false)}>
              入力欄を隠す
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Button size="sm" onClick={() => setIsShowInput(true)}>
            入力欄を表示
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListInput;
