import { Progress } from "@/components/ui/progress";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ProgressDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">プログレスバー</DesignHeading>
      <DesignBox className="mt-4">
        <Progress value={60} className="w-3/5" />
      </DesignBox>
    </section>
  );
};

export default ProgressDemo;
