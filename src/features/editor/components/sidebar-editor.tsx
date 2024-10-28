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
  useSidebar
} from "@/components/ui/sidebar";
import { ActiveTool, Editor } from "@/features/editor/types";
import { ShapePanel } from "@/features/editor/components/shape-panel";
import { SidebarItem } from "@/features/editor/components/sidebar-item";
import { SidebarTools } from "@/features/editor/components/sidebar-tools";
import { FillColorPanel } from "@/features/editor/components/fill-color-panel";
import { StrokeColorPanel } from "@/features/editor/components/stroke-color-panel";
import { StrokeWidthPanel } from "@/features/editor/components/stroke-width-panel";

interface EditorSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const SidebarEditor = ({
  editor,
  activeTool,
  onChangeActiveTool
}: EditorSidebarProps) => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
    >
      {/* Sidebar Tools */}
      <SidebarTools>
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
      </SidebarTools>
      {/* Sidebar Content Tools*/}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {activeTool === "shapes" && <ShapePanel editor={editor} />}
              {activeTool === "fill" && <FillColorPanel editor={editor} />}
              {activeTool === "stroke-color" && (
                <StrokeColorPanel editor={editor} />
              )}
              {activeTool === "stroke-width" && (
                <StrokeWidthPanel editor={editor} />
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
};
