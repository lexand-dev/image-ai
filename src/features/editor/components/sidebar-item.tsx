import type { LucideIcon } from "lucide-react";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick
}: SidebarItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={label} onClick={onClick} isActive={isActive}>
        <Icon className="mr-2" />
        <span>{label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
