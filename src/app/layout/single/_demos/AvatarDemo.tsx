import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const AvatarDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">アバター</DesignHeading>
      <DesignBox className="mt-4">
        <Avatar>
          <AvatarImage src="/images/dummy/600x600.png" alt="ダミー画像" />
          <AvatarFallback>IS</AvatarFallback>
        </Avatar>
        <p>
          fallbackのは画像が読み込まれるまでや読み込みエラー時に表示するイニシャル的なもの？（AvatarImageコメントアウトしたらfallbackが表示された）
        </p>
      </DesignBox>
    </section>
  );
};

export default AvatarDemo;
