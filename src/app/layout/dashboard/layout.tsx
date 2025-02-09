import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/layout/_components/AppSidebar";
// import LayoutHeader from "@/app/layout/_components/LayoutHeader";
// import LayoutFooter from "@/app/layout/_components/LayoutFooter";

type Props = {
  children: React.ReactNode;
};
// https://ui.shadcn.com/docs/components/sidebar
const Layout = ({ children }: Props) => {
  // return (
  //   <div className="flex min-h-screen flex-col">
  //     <div className="sticky top-0 z-10 w-full">
  //       <LayoutHeader />
  //     </div>
  //     <SidebarProvider>
  //       <AppSidebar />
  //       <main className="p-4">
  //         <SidebarTrigger />
  //         {children}
  //       </main>
  //     </SidebarProvider>
  //     <div className="mt-auto">
  //       <LayoutFooter />
  //     </div>
  //   </div>
  // );
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="p-4">
        <SidebarTrigger className="fixed" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
