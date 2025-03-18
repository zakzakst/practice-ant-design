import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const AlertDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">アラート</DesignHeading>
      <DesignBox className="mt-4">
        <Alert variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>アラートタイトル</AlertTitle>
          <AlertDescription>
            アラートの内容（タイトルのフォントのweightが英語用で設定されていた。そのため、日本語だとデザイン的のメリハリが消えてしまっていた。この辺は適宜調整必要と感じた）
          </AlertDescription>
        </Alert>
      </DesignBox>
    </section>
  );
};

export default AlertDemo;
