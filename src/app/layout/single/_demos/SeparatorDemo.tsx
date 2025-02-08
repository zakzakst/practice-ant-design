import { Separator } from "@/components/ui/separator";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const SeparatorDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">セパレーター</DesignHeading>
      <DesignBox className="mt-4">
        <Separator />
        {/* <Separator decorative /> */}
      </DesignBox>
    </section>
  );
};

export default SeparatorDemo;
