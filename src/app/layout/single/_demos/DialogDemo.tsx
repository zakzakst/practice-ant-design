"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const DialogDemo = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <section>
      <DesignHeading tag="h4">ダイアログ</DesignHeading>
      <DesignBox className="mt-4">
        <Button onClick={() => setIsOpenDialog(true)}>Open</Button>
        <Dialog
          // defaultOpen={true}
          // open={false}
          open={isOpenDialog}
          onOpenChange={(e) => {
            console.log(e);
            setIsOpenDialog(e);
          }}
        >
          {/* <DialogTrigger>Open</DialogTrigger> */}
          {/* <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger> */}
          <DialogContent
          // NOTE: DialogのほうのonOpenChangeで閉じる処理書けばまとめて閉じた
          // onEscapeKeyDown={() => setIsOpenDialog(false)}
          // onPointerDownOutside={() => setIsOpenDialog(false)}
          >
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>description</DialogDescription>
            </DialogHeader>
            <div>
              <p>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button>DialogClose</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DesignBox>
    </section>
  );
};

export default DialogDemo;
