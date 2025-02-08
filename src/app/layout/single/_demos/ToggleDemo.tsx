"use client";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ToggleDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">トグルボタン</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Toggle
            aria-label="Toggle bold"
            // pressed={true}
            defaultPressed={true}
            onPressedChange={(e) => {
              console.log(e);
            }}
          >
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" disabled>
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic />
            Italic
          </Toggle>
          <Toggle size="sm" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline" disabled>
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </DesignBox>
    </section>
  );
};

export default ToggleDemo;
