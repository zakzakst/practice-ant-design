import Link from "next/link";
import { Badge, badgeVariants } from "@/components/ui/badge";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const BadgeDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">バッジ</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex gap-2">
          <Badge>バッジ</Badge>
          <Badge variant="secondary">バッジ</Badge>
          <Badge variant="outline">バッジ</Badge>
          <Badge variant="destructive">バッジ</Badge>
          <Link href="/" className={badgeVariants()}>
            バッジ（リンク）
          </Link>
          <Link href="/" className={badgeVariants({ variant: "outline" })}>
            バッジ（リンク）
          </Link>
        </div>
      </DesignBox>
    </section>
  );
};

export default BadgeDemo;
