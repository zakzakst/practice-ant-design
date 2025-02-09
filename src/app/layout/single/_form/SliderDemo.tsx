"use client";
import { Slider } from "@/components/ui/slider";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const SliderDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">スライダー</DesignHeading>
      <DesignBox className="mt-4">
        <Slider
          defaultValue={[33]}
          // value={[50]}
          max={100}
          step={1}
          // disabled
          onValueChange={(e) => console.log("onValueChange", e)}
          onValueCommit={(e) => console.log("onValueCommit", e)}
        />
      </DesignBox>
    </section>
  );
};

export default SliderDemo;
