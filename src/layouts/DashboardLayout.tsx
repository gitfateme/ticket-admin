import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="peer-data-[side=right]:ml-0 peer-data-[side=right]:peer-data-[state=expanded]:mr-[var(--sidebar-width)]">
        <SiteHeader />
        <div className="flex flex-1 flex-col min-w-0 ">
          <main className="flex-1 p-4  overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
