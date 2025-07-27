"use client";

import Link from "next/link";
import {
  animate,
  createScope,
  // createSpring,
  // createDraggable,
  createTimeline,
  Scope,
} from "animejs";
import { useEffect, useRef, useState } from "react";

export const Sample = () => {
  const root = useRef(null);
  // const scope = useRef<Scope>(null)
  const [scope, setScope] = useState<Scope>();
  // const [rotations, setRotations] = useState(0)

  useEffect(() => {
    const _scope = createScope({ root }).add((self) => {
      // animate(".test", {
      //   scale: [
      //     { to: 1.25, ease: "inOut(3)", duration: 200 },
      //     { to: 1, ease: createSpring({ stiffness: 300 }) },
      //   ],
      //   loop: true,
      //   loopDelay: 250,

      //   // rotate: 360,
      //   // ease: "out(4)",
      //   // duration: 1500,
      // });
      self?.add("rotateTest", (count: number) => {
        // animate(".test", {
        //   // rotate: count * 360,
        //   x: "15rem",
        //   y: "20rem",
        //   // loop: true,
        //   // alternate: true,
        //   ease: "out(4)",
        //   duration: 1500,
        //   onComplete: (self) => console.log(self),
        //   // onLoop: (self) => console.log(self),
        // });

        const tl = createTimeline()
          .add(".test", {
            x: "15rem",
            y: "20rem",
            ease: "out(4)",
            duration: 1500,
          })
          .add(
            ".test",
            {
              rotate: 360,
              ease: "out(4)",
              duration: 500,
            },
            "+=1000"
          );

        tl.play();
      });
    });
    setScope(_scope);
    return () => scope?.revert();
  }, []);

  return (
    <div ref={root}>
      <div className="p-10">
        <p className="test">aaa</p>
        <p>
          <button
            onClick={() => {
              scope?.methods.rotateTest(1);
            }}
          >
            回転
          </button>
          <Link href="/">TOP</Link>
        </p>
      </div>
    </div>
  );
};
