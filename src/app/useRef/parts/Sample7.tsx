// RefCallbackについてChatGPTにきいた

/**
■ メリット
- マウント/アンマウントのタイミングに応じた初期化・破棄が書きやすい
- 依存配列や useEffect なしで、特定要素のライフサイクルを管理できる
- 複数の要素に別々のコールバック ref を割り当てられる

■ デメリット
- 毎レンダーで関数が再生成されると無駄に呼ばれる可能性がある（useCallback で安定化させることが多い）
- ref.current でのアクセスに比べて「値を保持する」用途には向かない

■ 個人的には、
「一度だけ初期化して破棄する」→ ref callback
「値を保持していつでも読めるようにする」→ useRef オブジェクト
という使い分けがおすすめです。
 */

"use client";
import { useRef } from "react";

export const Sample = () => {
  const observerRef = useRef<ResizeObserver | null>(null);

  const refCallback = (node: HTMLDivElement | null) => {
    if (node) {
      observerRef.current = new ResizeObserver((entries) => {
        console.log("サイズ変化", entries[0].contentRect);
      });
      observerRef.current.observe(node);
    } else {
      observerRef.current?.disconnect();
      observerRef.current = null;
    }
  };

  return (
    <div ref={refCallback} style={{ resize: "both", overflow: "auto" }}>
      リサイズしてみて
    </div>
  );
};

// 外部インスタンスの初期化
// ⇒サンプルで教えてもらったが、こちらはuseEffectのほうがいい気がしたのでコメントでメモだけ残す
/**
import { useRef } from "react";
import Chart from "chart.js/auto";

const ChartExample = () => {
  const chartInstance = useRef<Chart | null>(null);

  const refCallback = (canvas: HTMLCanvasElement | null) => {
    if (canvas) {
      chartInstance.current = new Chart(canvas, {
        type: "bar",
        data: { labels: ["A", "B"], datasets: [{ data: [10, 20] }] },
      });
    } else {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    }
  };

  return <canvas ref={refCallback}></canvas>;
};
 */
