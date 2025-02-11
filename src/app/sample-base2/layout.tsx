"use client";
import Header from "@/app/sample-base2/_components/Header";
import Footer from "@/app/sample-base2/_components/Footer";

type Props = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};

const Layout = ({ children, sidebar }: Props) => {
  console.log("sidebar:", sidebar);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="sticky top-0 z-10 w-full">
          <Header />
        </div>
        {sidebar !== null ? (
          // サイドバーがある場合
          <div className="mx-auto container grid grid-cols-[200px_1fr]">
            <aside className="p-4">{sidebar}</aside>
            <main className="p-4">{children}</main>
          </div>
        ) : (
          // サイドバーがない場合
          <div className="mx-auto container">
            <main className="p-4">{children}</main>
          </div>
        )}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
