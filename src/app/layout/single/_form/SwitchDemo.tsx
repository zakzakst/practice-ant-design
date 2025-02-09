"use client";
import { Switch } from "@/components/ui/switch";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const SwitchDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">スイッチ</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Switch
            defaultChecked={true}
            // checked={true}
            onCheckedChange={(e) => console.log(e)}
          />
          <Switch disabled />
        </div>
      </DesignBox>
    </section>
  );
};

export default SwitchDemo;
