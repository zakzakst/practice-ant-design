import Header from "@/app/sample-base/_components/Header";
import Footer from "@/app/sample-base/_components/Footer";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const Layout = ({ children, sidebar }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="sticky top-0 z-10 w-full">
          <Header />
        </div>
        <div className="mx-auto container grid grid-cols-[200px_1fr]">
          <aside className="p-4">{sidebar}</aside>
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
