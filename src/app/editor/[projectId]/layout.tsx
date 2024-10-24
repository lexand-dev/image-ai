import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CanvaSidebar } from "@/features/editor/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <CanvaSidebar />

      <main className="relative flex min-h-svh flex-1 flex-col bg-background overflow-auto">
        {children}
      </main>
    </SidebarProvider>
  );
}
