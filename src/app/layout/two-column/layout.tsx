import LayoutHeader from "@/app/layout/_components/LayoutHeader";
import LayoutFooter from "@/app/layout/_components/LayoutFooter";
import LayoutSidebar from "@/app/layout/_components/LayoutSidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-10 w-full">
        <LayoutHeader />
      </div>
      <div className="container mx-auto grid grid-cols-[200px_1fr]">
        <div className="p-4">
          <LayoutSidebar />
        </div>
        <main className="p-4">{children}</main>
      </div>
      <div className="mt-auto">
        <LayoutFooter />
      </div>
    </div>
  );
};

export default Layout;
