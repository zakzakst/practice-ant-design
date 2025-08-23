import React from "react";

// NOTE: 下記を参考に作成
// node_modules\lucide-react\dist\cjs\lucide-react.js

const DefaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 0,
};

export type IconProps = {
  color?: string;
  size?: number;
  className?: string;
};

export const createIcon = (
  { color = "currentColor", size = 24, className }: IconProps,
  iconNodes: { tag: string; attrs: Record<string, string> }[]
) => {
  return React.createElement(
    "svg",
    {
      ...DefaultAttributes,
      width: size,
      height: size,
      className,
    },
    [
      ...iconNodes.map(({ tag, attrs }) =>
        React.createElement(tag, { ...attrs, fill: color })
      ),
    ]
  );
};
