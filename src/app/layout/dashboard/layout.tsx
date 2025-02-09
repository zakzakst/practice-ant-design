import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/layout/_components/AppSidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
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
