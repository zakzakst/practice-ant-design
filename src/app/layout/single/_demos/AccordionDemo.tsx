import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const AccordionDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">アコーディオン</DesignHeading>
      <DesignBox className="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>項目1</AccordionTrigger>
            <AccordionContent>項目1の内容</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>項目2</AccordionTrigger>
            <AccordionContent>項目2の内容</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>項目3</AccordionTrigger>
            <AccordionContent>項目3の内容</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DesignBox>
    </section>
  );
};

export default AccordionDemo;
