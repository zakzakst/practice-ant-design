"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const RadioGroupDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">ラジオボタングループ</DesignHeading>
      <DesignBox className="mt-4">
        <RadioGroup
          defaultValue="option-one"
          // value="option-two"
          // disabled
          onValueChange={(e) => console.log(e)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </DesignBox>
    </section>
  );
};

export default RadioGroupDemo;
