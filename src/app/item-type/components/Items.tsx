import { ReactNode } from "react";

type Item<T extends string = string> = {
  value: T;
  label: ReactNode;
};

type Props<T extends string = string> = {
  items: Item<T>[];
};

export const Items = <T extends string = string>({ items }: Props<T>) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.value} data-value={item.value}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};
