"use client";

import Link from "next/link";
import { createScope, animate, onScroll, Scope } from "animejs";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const root = useRef(null);
  const [scope, setScope] = useState<Scope>();

  useEffect(() => {
    const _scope = createScope({ root }).add(() => {
      animate(".test", {
        x: "15rem",
        rotate: "1turn",
        ease: "linear",
        autoplay: onScroll({
          // container: ".testContainer",
          enter: "bottom-=50 top",
          leave: "top+=60 bottom",
          sync: 0.25,
          debug: true,
          onEnter: () => {
            console.log("onEnter");
          },
          onEnterForward: () => {
            console.log("onEnterForward");
          },
          onSyncComplete: () => {
            console.log("onSyncComplete");
          },
        }),
      });
    });
    setScope(_scope);
    return () => scope?.revert();
  }, []);

  return (
    <div ref={root}>
      <div className="p-10">
        <div className="h-screen" />
        <div className="testContainer">
          <p className="test w-[100px]">aaa</p>
        </div>
        <p>
          {/* <button
            onClick={() => {
              scope?.methods.rotateTest(1);
            }}
          >
            回転
          </button> */}
          <Link href="/">TOP</Link>
        </p>
        <div className="h-screen" />
      </div>
    </div>
  );
};
