import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Ticket, Users } from "lucide-react";
export function AppSidebar() {
  return (
    <Sidebar
      side="right"
      variant="inset"
      collapsible="icon"
      className=" w-[var(--sidebar-width)]"
    >
      <SidebarHeader className="h-12 border-b flex items-center ">
        <Ticket className="size-6" />
        <span className="font-bold group-data-[collapsible=icon]:hidden">
          منو
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="داشبورد">
              <a href="/dashboard">
                <Home className="size-4" />
                <span>داشبورد</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>{" "}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="کاربرها">
              <a href="/users">
                <Users className="size-4" />
                <span>کاربرها</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
