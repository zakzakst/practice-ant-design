"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  // AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const AlertDialogDemo = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <section>
      <DesignHeading tag="h4">警告ダイアログ</DesignHeading>
      <DesignBox className="mt-4">
        <Button onClick={() => setIsOpenDialog(true)}>Open</Button>
        <AlertDialog
          // defaultOpen={true}
          open={isOpenDialog}
          onOpenChange={(e) => {
            console.log(e);
            setIsOpenDialog(e);
          }}
        >
          {/* <AlertDialogTrigger disabled>Open</AlertDialogTrigger> */}
          {/* <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger> */}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DesignBox>
    </section>
  );
};

export default AlertDialogDemo;
