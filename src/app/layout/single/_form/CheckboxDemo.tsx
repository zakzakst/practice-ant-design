"use client";
import { Checkbox } from "@/components/ui/checkbox";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const CheckboxDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">チェックボックス</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Checkbox
            defaultChecked={true}
            // checked={true}
            onCheckedChange={(e) => console.log(e)}
          />
          <Checkbox disabled />
        </div>
      </DesignBox>
    </section>
  );
};

export default CheckboxDemo;
