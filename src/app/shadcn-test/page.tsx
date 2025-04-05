"use client";

import { useState } from "react";
import { Combobox } from "./components/Combobox";
import type { Item as ComboboxItem } from "./components/Combobox";

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
  const [frameworks, setFrameworks] = useState<ComboboxItem[]>([]);
  return (
    <div>
      <h2>hogehoge</h2>
      <p onClick={() => setFrameworks(frameworkItems)}>値変更</p>
      <div>
        <Combobox
          items={frameworks}
          placeholder="項目を選択してください"
          emptyMessage="選択肢がありません"
        />
      </div>
    </div>
  );
};

export default Page;
