import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const LabelDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">ラベル</DesignHeading>
      <DesignBox className="mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </DesignBox>
    </section>
  );
};

export default LabelDemo;
