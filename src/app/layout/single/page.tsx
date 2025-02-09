import AccordionDemo from "./_demos/AccordionDemo";
import AlertDemo from "./_demos/AlertDemo";
import AspectRatioDemo from "./_demos/AspectRatioDemo";
import AvatarDemo from "./_demos/AvatarDemo";
import BadgeDemo from "./_demos/BadgeDemo";
import BreadcrumbDemo from "./_demos/BreadcrumbDemo";
import ButtonDemo from "./_demos/ButtonDemo";
import CardDemo from "./_demos/CardDemo";
import ProgressDemo from "./_demos/ProgressDemo";
import SeparatorDemo from "./_demos/SeparatorDemo";
import TableDemo from "./_demos/TableDemo";
import ScrollAreaDemo from "./_demos/ScrollAreaDemo";
import PaginationDemo from "./_demos/PaginationDemo";
import ToggleDemo from "./_demos/ToggleDemo";
import ToggleGroupDemo from "./_demos/ToggleGroupDemo";
import TooltipDemo from "./_demos/TooltipDemo";

import InputDemo from "./_form/InputDemo";
import LabelDemo from "./_form/LabelDemo";
import TextareaDemo from "./_form/TextareaDemo";
import CheckboxDemo from "./_form/CheckboxDemo";
import SwitchDemo from "./_form/SwitchDemo";
import RadioGroupDemo from "./_form/RadioGroupDemo";
import SelectDemo from "./_form/SelectDemo";
import SliderDemo from "./_form/SliderDemo";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="hidden">
        <AccordionDemo />
        <AlertDemo />
        <AspectRatioDemo />
        <AvatarDemo />
        <BadgeDemo />
        <BreadcrumbDemo />
        <ButtonDemo />
        <CardDemo />
        <ProgressDemo />
        <SeparatorDemo />
        <TableDemo />
        <ScrollAreaDemo />
        <PaginationDemo />
        <ToggleDemo />
        <ToggleGroupDemo />
        <TooltipDemo />
      </div>
      <div className="grid grid-cols-1 gap-8 hidden">
        {/* フォーム */}
        {/* https://ui.shadcn.com/docs/components/form */}
        <InputDemo />
        <LabelDemo />
        <TextareaDemo />
        <CheckboxDemo />
        <SwitchDemo />
        <RadioGroupDemo />
        <SelectDemo />
        <SliderDemo />
      </div>
      {/* TODO: */}
      {/* https://ui.shadcn.com/docs/components/dialog */}
      {/* https://ui.shadcn.com/docs/components/alert-dialog */}
      {/* https://ui.shadcn.com/docs/components/tabs */}
      {/* https://ui.shadcn.com/docs/components/toast */}
      {/* https://ui.shadcn.com/docs/components/sheet */}
      {/* https://ui.shadcn.com/docs/components/popover */}
      {/* https://ui.shadcn.com/docs/components/sidebar */}
    </div>
  );
};

export default Page;
