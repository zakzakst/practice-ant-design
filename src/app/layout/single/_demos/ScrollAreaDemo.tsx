import { ScrollArea } from "@/components/ui/scroll-area";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const ScrollAreaDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">スクロール領域</DesignHeading>
      <DesignBox className="mt-4">
        <ScrollArea
          className="h-[200px] w-[350px] rounded-md border p-4"
          scrollHideDelay={400}
        >
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester. And then, one day, the people of
          the kingdom discovered that the jokes left by Jokester were so funny
          that they couldn&apos;t help but laugh. And once they started
          laughing, they couldn&apos;t stop.
        </ScrollArea>
      </DesignBox>
    </section>
  );
};

export default ScrollAreaDemo;
