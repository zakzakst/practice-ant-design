"use client";

import Lottie, { Options } from "react-lottie";
import emotionsData from "./emotions.json";

export const Emotions = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: emotionsData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};
