import Header from "@/app/sample-base3/_components/Header";
import Footer from "@/app/sample-base3/_components/Footer";

type Props = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  // sidebar?: React.ReactElement | null;
};

const PageContainer = ({ children, sidebar }: Props) => {
  // console.log("sidebar:", sidebar, children);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="sticky top-0 z-10 w-full">
          <Header />
        </div>
        {sidebar ? (
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

export default PageContainer;
