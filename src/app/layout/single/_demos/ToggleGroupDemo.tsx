"use client";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ToggleGroupDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">トグルボタングループ</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <ToggleGroup
            type="multiple"
            defaultValue={["italic", "underline"]}
            onValueChange={(e) => {
              console.log(e);
            }}
            // value={["bold"]}
            // disabled
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            variant="outline"
            type="single"
            // value="bold"
            defaultValue="italic"
            onValueChange={(e) => {
              console.log(e);
            }}
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </DesignBox>
    </section>
  );
};

export default ToggleGroupDemo;
