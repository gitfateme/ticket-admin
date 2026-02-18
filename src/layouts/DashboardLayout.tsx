import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    /* Add dir="rtl" here */
    <SidebarProvider>
      <div dir="rtl" className="flex min-h-screen w-full">
        <AppSidebar />

        {/* SidebarInset will now use the margin-right we defined in CSS */}
        <SidebarInset className="flex flex-col flex-1 min-w-0">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background">
            <SidebarTrigger className="rtl:rotate-180" />
            <div className="h-4 w-[1px] bg-border mx-2" />
            <span className="font-semibold">سیستم تیکت</span>
          </header>

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
