import AccordionDemo from "./_demos/AccordionDemo";
import AlertDemo from "./_demos/AlertDemo";
import AspectRatioDemo from "./_demos/AspectRatioDemo";
import AvatarDemo from "./_demos/AvatarDemo";
import BadgeDemo from "./_demos/BadgeDemo";
import BreadcrumbDemo from "./_demos/BreadcrumbDemo";
import ButtonDemo from "./_demos/ButtonDemo";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <AccordionDemo />
      <AlertDemo />
      {/* https://ui.shadcn.com/docs/components/alert-dialog */}
      <AspectRatioDemo />
      <AvatarDemo />
      <BadgeDemo />
      <BreadcrumbDemo />
      <ButtonDemo />
      {/* https://ui.shadcn.com/docs/components/calendar */}
    </div>
  );
};

export default Page;
