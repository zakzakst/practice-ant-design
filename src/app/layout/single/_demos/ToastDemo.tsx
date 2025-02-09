"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <section>
      <DesignHeading tag="h4">トースト</DesignHeading>
      <DesignBox className="mt-4">
        <Button
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
              duration: 4000,
              action: (
                <ToastAction
                  altText="Try again"
                  onClick={() => console.log("action")}
                >
                  Try again
                </ToastAction>
              ),
            });
          }}
        >
          Show Toast
        </Button>
      </DesignBox>
    </section>
  );
};

export default ToastDemo;
