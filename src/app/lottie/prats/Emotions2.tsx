"use client";

import {
  useEffect,
  useRef,
  // useState,
} from "react";
import lottie, { AnimationItem } from "lottie-web";
import emotionsData from "./emotions.json";

type EmotionType = "happy" | "angry" | "sad";

export const Emotions = () => {
  // const [isEmoting, setIsEmoting] = useState(false);
  const isEmotingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  // state と ref を同期
  // useEffect(() => {
  //   isEmotingRef.current = isEmoting;
  // }, [isEmoting]);

  const startLoopAnim = () => {
    animationRef.current?.playSegments([0, 24], true);
  };

  const startEmotionAnim = (type: EmotionType) => {
    if (isEmotingRef.current || !animationRef.current) return;
    // setIsEmoting(true);
    isEmotingRef.current = true;

    switch (type) {
      case "happy":
        animationRef.current.playSegments([24, 78], false);
        break;
      case "angry":
        animationRef.current.playSegments([78, 132], false);
        break;
      case "sad":
        animationRef.current.playSegments([132, 186], false);
        break;
      default:
        console.error("対応するアニメーションがありません");
        break;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: emotionsData,
      initialSegment: [0, 24],
    });

    animation.setSpeed(1.5);

    animation.addEventListener("complete", () => {
      if (isEmotingRef.current) {
        // setIsEmoting(false);
        isEmotingRef.current = false;
      }
      startLoopAnim();
    });

    animationRef.current = animation;
    startLoopAnim();

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      {/* <div>{JSON.stringify(isEmotingRef)}</div> */}
      <div>
        <button onClick={() => startEmotionAnim("happy")}>喜ぶ</button>
        <button onClick={() => startEmotionAnim("angry")}>怒る</button>
        <button onClick={() => startEmotionAnim("sad")}>悲しむ</button>
      </div>
      <div ref={containerRef} style={{ width: 300, height: 300 }} />
    </div>
  );
};
