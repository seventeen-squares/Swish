import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/layout/Navbar";
const user = {
  name: "martin",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider open={true} className="">
      <AppSidebar />
      <main>
        <Navbar user={user} />
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
