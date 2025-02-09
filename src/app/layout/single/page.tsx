import InputDemo from "./_form/InputDemo";
import LabelDemo from "./_form/LabelDemo";
import TextareaDemo from "./_form/TextareaDemo";
import CheckboxDemo from "./_form/CheckboxDemo";
import SwitchDemo from "./_form/SwitchDemo";
import RadioGroupDemo from "./_form/RadioGroupDemo";
import SelectDemo from "./_form/SelectDemo";
import SliderDemo from "./_form/SliderDemo";
import DatePickerDemo from "./_form/DatePickerDemo";

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
import TabsDemo from "./_demos/TabsDemo";
import PopoverDemo from "./_demos/PopoverDemo";
import DialogDemo from "./_demos/DialogDemo";
import AlertDialogDemo from "./_demos/AlertDialogDemo";
import SheetDemo from "./_demos/SheetDemo";
import ToastDemo from "./_demos/ToastDemo";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="grid grid-cols-1 gap-8 hidden">
        {/* フォーム */}
        <InputDemo />
        <LabelDemo />
        <TextareaDemo />
        <CheckboxDemo />
        <SwitchDemo />
        <RadioGroupDemo />
        <SelectDemo />
        <SliderDemo />
        <DatePickerDemo />
      </div>
      <div className="grid grid-cols-1 gap-8 hidden">
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
        <TabsDemo />
        <PopoverDemo />
        <DialogDemo />
        <AlertDialogDemo />
        <SheetDemo />
        <ToastDemo />
      </div>
    </div>
  );
};

export default Page;
