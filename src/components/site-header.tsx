import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mx-2 h-4" />
      <h1 className="text-base font-medium">تیکت</h1>
    </header>
  );
}
