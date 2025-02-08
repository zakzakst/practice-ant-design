import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const CardDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">カード</DesignHeading>
      <DesignBox className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>タイトル</CardTitle>
            <CardDescription>概要</CardDescription>
          </CardHeader>
          <CardContent>
            <p>内容</p>
          </CardContent>
          <CardFooter>
            <p>フッター</p>
          </CardFooter>
        </Card>
      </DesignBox>
    </section>
  );
};

export default CardDemo;
