// https://www.mingcute.com/
import { IconProps, createIcon } from "./utils";

const BitcoinIconNodes = [
  {
    tag: "path",
    attrs: {
      d: "M13 3a1 1 0 0 1 1 1v1a4 4 0 0 1 2.646 7A4 4 0 0 1 14 19v1a1 1 0 1 1-2 0v-1h-2v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1V7H6a1 1 0 0 1 0-2h2V4a1 1 0 0 1 2 0v1h2V4a1 1 0 0 1 1-1m1 10H9v4h5a2 2 0 1 0 0-4m0-6H9v4h5a2 2 0 0 0 .15-3.995z",
    },
  },
];

export const Bitcoin = (props: IconProps) =>
  createIcon(props, BitcoinIconNodes);
