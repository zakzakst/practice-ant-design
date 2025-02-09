import { Input } from "@/components/ui/input";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const InputDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">インプット</DesignHeading>
      <DesignBox className="mt-4">
        <div className="grid grid-cols-1 gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="file" />
          <Input disabled type="email" placeholder="Email" />
        </div>
        <p>
          アラート状態やサクセス状態は設定出来なかった、別途classNameで値を設定する必要がある
        </p>
      </DesignBox>
    </section>
  );
};

export default InputDemo;
