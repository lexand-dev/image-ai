"use client";

import {
  LayoutTemplate,
  ImageIcon,
  Shapes,
  Sparkles,
  Settings,
  Type
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Logo } from "@/features/editor/components/logo";
import { ActiveTool } from "@/features/editor/types";
import { SidebarItem } from "@/features/editor/components/sidebar-item";
import { SidebarContentEditor } from "@/features/editor/components/sidebar-content-editor";

interface EditorSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const EditorSidebar = ({
  activeTool,
  onChangeActiveTool
}: EditorSidebarProps) => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
    >
      {/* Sidebar Items */}
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                <SidebarItem
                  icon={LayoutTemplate}
                  label="Design"
                  isActive={activeTool === "templates"}
                  onClick={() => onChangeActiveTool("templates")}
                />
                <SidebarItem
                  icon={ImageIcon}
                  label="Image"
                  isActive={activeTool === "images"}
                  onClick={() => onChangeActiveTool("images")}
                />
                <SidebarItem
                  icon={Type}
                  label="Text"
                  isActive={activeTool === "text"}
                  onClick={() => onChangeActiveTool("text")}
                />
                <SidebarItem
                  icon={Shapes}
                  label="Shapes"
                  isActive={activeTool === "shapes"}
                  onClick={() => onChangeActiveTool("shapes")}
                />
                <SidebarItem
                  icon={Sparkles}
                  label="AI"
                  isActive={activeTool === "ai"}
                  onClick={() => onChangeActiveTool("ai")}
                />
                <SidebarItem
                  icon={Settings}
                  label="Settings"
                  isActive={activeTool === "settings"}
                  onClick={() => onChangeActiveTool("settings")}
                />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {isMobile && (
            <SidebarGroup>
              <SidebarGroupLabel>{activeTool}</SidebarGroupLabel>
              <SidebarContentEditor
                activeTool={activeTool}
                onChangeActiveTool={onChangeActiveTool}
              />
            </SidebarGroup>
          )}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      {/* Sidebar Content */}
      <SidebarContentEditor
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
    </Sidebar>
  );
};
