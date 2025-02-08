import LayoutHeader from "@/app/layout/_components/LayoutHeader";
import LayoutFooter from "@/app/layout/_components/LayoutFooter";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-10 w-full">
        <LayoutHeader />
      </div>
      <div className="mx-auto container">
        <main className="p-4">{children}</main>
      </div>
      <div className="mt-auto">
        <LayoutFooter />
      </div>
    </div>
  );
};

export default Layout;
