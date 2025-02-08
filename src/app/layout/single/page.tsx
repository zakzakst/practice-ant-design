import AccordionDemo from "./_demos/AccordionDemo";
import AlertDemo from "./_demos/AlertDemo";

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <AccordionDemo />
      <AlertDemo />
      {/* https://ui.shadcn.com/docs/components/alert-dialog */}
    </div>
  );
};

export default Page;
