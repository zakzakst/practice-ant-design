"use client";

// import { useState } from "react";
// import { Combobox } from "./components/Combobox";
import { SelectList } from "./components/SelectList";
// import type { Item as ComboboxItem } from "./components/Combobox";

const frameworkItems = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Page = () => {
  // const [frameworks, setFrameworks] = useState<ComboboxItem[]>([]);
  // const [selectedItems, setSelectedItems] = useState<ComboboxItem[]>([]);

  // const onAddSelectedItem = (item: ComboboxItem) => {
  //   setSelectedItems([...selectedItems, item]);
  // };
  // const onDeleteSelectedItem = (item: ComboboxItem) => {
  //   console.log(item);
  // };
  return (
    <div>
      <h2>hogehoge</h2>
      {/* <p onClick={() => setFrameworks(frameworkItems)}>値変更</p> */}
      <div>
        {/* <Combobox
          items={frameworks}
          placeholder="項目を選択してください"
          emptyMessage="選択肢がありません"
        /> */}
        <div>
          <SelectList
            listItems={frameworkItems}
            // selectedItems={selectedItems}
            // onAddSelectedItem={onAddSelectedItem}
            // onDeleteSelectedItem={onDeleteSelectedItem}
            onChangeSelectedItems={(items) => console.log(items)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
