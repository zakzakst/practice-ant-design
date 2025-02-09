"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const PopoverDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">ポップオーバー</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Popover
            // defaultOpen={true}
            // open={false}
            onOpenChange={(e) => console.log(e)}
          >
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>hoge</PopoverContent>
          </Popover>
        </div>
      </DesignBox>
    </section>
  );
};

export default PopoverDemo;
