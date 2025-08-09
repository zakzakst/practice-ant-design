"use client";

import Lottie, { Options } from "react-lottie";
import emotionsData from "./prats/emotions.json";

const Page = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: emotionsData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Page;
