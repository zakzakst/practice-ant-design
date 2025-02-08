import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const AspectRatioDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">アスペクト比</DesignHeading>
      <DesignBox className="mt-4">
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/images/dummy/600x600.png"
              alt="ダミー画像"
              width={600}
              height={600}
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <p>
          cssのaspect-ratioでなく、古い書き方（position:
          absolute使うやつ）してた。複雑なスタイルではないし、必要だったら自作したほうがよさそう
        </p>
      </DesignBox>
    </section>
  );
};

export default AspectRatioDemo;
