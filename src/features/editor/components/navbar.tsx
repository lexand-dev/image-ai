import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[50px] gap-x-8 border-b lg:pl-[34px]">
      <SidebarTrigger />
      <ul>Navb</ul>
    </nav>
  );
};
