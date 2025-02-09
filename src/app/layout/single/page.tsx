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
      <InputDemo />
      <LabelDemo />
      <TextareaDemo />
      <CheckboxDemo />
      <SwitchDemo />
      {/* フォーム */}
      {/* https://ui.shadcn.com/docs/components/form */}
      {/* https://ui.shadcn.com/docs/components/radio-group */}
      {/* https://ui.shadcn.com/docs/components/select */}
      {/* TODO: */}
      {/* https://ui.shadcn.com/docs/components/alert-dialog */}
      {/* https://ui.shadcn.com/docs/components/dialog */}
      {/* https://ui.shadcn.com/docs/components/drawer */}
      {/* https://ui.shadcn.com/docs/components/dropdown-menu */}
      {/* https://ui.shadcn.com/docs/components/hover-card */}
      {/* https://ui.shadcn.com/docs/components/menubar */}
      {/* https://ui.shadcn.com/docs/components/navigation-menu */}
      {/* https://ui.shadcn.com/docs/components/popover */}
      {/* https://ui.shadcn.com/docs/components/sheet */}
      {/* https://ui.shadcn.com/docs/components/sidebar */}
      {/* https://ui.shadcn.com/docs/components/slider */}
      {/* https://ui.shadcn.com/docs/components/sonner */}
      {/* https://ui.shadcn.com/docs/components/tabs */}
      {/* https://ui.shadcn.com/docs/components/toast */}
    </div>
  );
};

export default Page;
