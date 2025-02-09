"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  // SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const SheetDemo = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  return (
    <section>
      <DesignHeading tag="h4">シート</DesignHeading>
      <DesignBox className="mt-4">
        <Button onClick={() => setIsOpenSheet(true)}>Open</Button>
        <Sheet
          // defaultOpen={true}
          open={isOpenSheet}
          onOpenChange={(e) => {
            console.log(e);
            setIsOpenSheet(e);
          }}
        >
          {/* <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger> */}
          <SheetContent
            // side="top"
            side="bottom"
            // side="left"
            // side="right"
          >
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </DesignBox>
    </section>
  );
};

export default SheetDemo;
