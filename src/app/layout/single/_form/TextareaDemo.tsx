import { Textarea } from "@/components/ui/textarea";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const TextareaDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">テキストエリア</DesignHeading>
      <DesignBox className="mt-4">
        <div className="grid grid-cols-1 gap-8">
          <Textarea placeholder="Type your message here." />
          <Textarea placeholder="Type your message here." disabled />
        </div>
      </DesignBox>
    </section>
  );
};

export default TextareaDemo;
