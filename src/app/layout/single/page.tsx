import AccordionDemo from "./_demos/AccordionDemo";
import AlertDemo from "./_demos/AlertDemo";
import AspectRatioDemo from "./_demos/AspectRatioDemo";
import AvatarDemo from "./_demos/AvatarDemo";
import BadgeDemo from "./_demos/BadgeDemo";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <AccordionDemo />
      <AlertDemo />
      {/* https://ui.shadcn.com/docs/components/alert-dialog */}
      <AspectRatioDemo />
      <AvatarDemo />
      <BadgeDemo />
    </div>
  );
};

export default Page;
