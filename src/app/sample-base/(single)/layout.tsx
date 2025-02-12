import Header from "@/app/sample-base/_components/Header";
import Footer from "@/app/sample-base/_components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="sticky top-0 z-10 w-full">
          <Header />
        </div>
        <div className="container mx-auto">
          <main className="p-4">{children}</main>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
