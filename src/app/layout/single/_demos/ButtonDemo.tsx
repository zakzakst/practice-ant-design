import Link from "next/link";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ButtonDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">ボタン</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Button>ボタン</Button>
          <Button variant="secondary">ボタン</Button>
          <Button variant="destructive">ボタン</Button>
          <Button variant="outline">ボタン</Button>
          <Button variant="ghost">ボタン</Button>
          <Button variant="link">ボタン</Button>
          <Button disabled>無効</Button>
          <Button variant="outline" size="icon">
            <ChevronRight />
          </Button>
          <Button>
            <ChevronRight /> アイコン付き
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            ローディング
          </Button>
          <Link href="/" className={buttonVariants()}>
            リンク
          </Link>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            リンク
          </Link>
        </div>
      </DesignBox>
    </section>
  );
};

export default ButtonDemo;
