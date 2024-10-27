"use client";

import {
  LayoutTemplate,
  ImageIcon,
  Layers,
  Shapes,
  Sparkles,
  Settings,
  Type
} from "lucide-react";

import { Button } from "@/components/ui/button";
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

interface EditorSidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const EditorSidebar = ({
  activeTool,
  onChangeActiveTool
}: EditorSidebarProps) => {
  const { setOpen, isMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
    >
      {/* This is the first sidebar */}
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
              <SidebarGroupContent>
                {activeTool === "shapes" && <ShapesPanel />}
                {activeTool === "text" && <TextPanel />}
                {activeTool === "images" && <ImagesPanel />}
                {activeTool === "settings" && <SettingsPanel />}
                {activeTool === "templates" && <DesignPanel />}
                {activeTool === "ai" && <AIPanel />}
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      {/* Second Sidebar */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="flex-row items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeTool}
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {activeTool === "shapes" && <ShapesPanel />}
              {activeTool === "text" && <TextPanel />}
              {activeTool === "images" && <ImagesPanel />}
              {activeTool === "settings" && <SettingsPanel />}
              {activeTool === "templates" && <DesignPanel />}
              {activeTool === "ai" && <AIPanel />}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </Sidebar>
  );
};

function ShapesPanel() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {["Square", "Circle", "Triangle", "Line", "Arrow", "Star"].map(
        (shape) => (
          <Button
            key={shape}
            variant="outline"
            className="h-20 flex flex-col items-center justify-center"
          >
            <Shapes className="h-8 w-8 mb-1" />
            <span className="text-xs">{shape}</span>
          </Button>
        )
      )}
    </div>
  );
}

function TextPanel() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Button variant="outline" className="justify-start">
        <Type className="mr-2" /> Add a heading
      </Button>
      <Button variant="outline" className="justify-start">
        <Type className="mr-2" /> Add a subheading
      </Button>
      <Button variant="outline" className="justify-start">
        <Type className="mr-2" /> Add body text
      </Button>
    </div>
  );
}

function ImagesPanel() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="aspect-square bg-muted rounded-md flex items-center justify-center"
        >
          {/*This is where the change is made.  The ImageIcon component is used instead of creating a new Image object.  The instructions were unclear on how to handle this situation.*/}
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
      ))}
      <Button variant="outline" className="col-span-2">
        Upload an image
      </Button>
    </div>
  );
}

function AIPanel() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="aspect-square bg-muted rounded-md flex items-center justify-center"
        >
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
      ))}
      <Button variant="outline" className="col-span-2">
        Generate Image
      </Button>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {[
        "bg-primary",
        "bg-secondary",
        "bg-accent",
        "bg-muted",
        "bg-popover",
        "bg-card"
      ].map((bgClass) => (
        <div key={bgClass} className={`aspect-square rounded-md ${bgClass}`} />
      ))}
    </div>
  );
}

function DesignPanel() {
  return (
    <div className="flex flex-col gap-1 p-2">
      {["Layer 1", "Layer 2", "Layer 3"].map((layer) => (
        <Button key={layer} variant="ghost" className="justify-start">
          <Layers className="mr-2 h-4 w-4" />
          {layer}
        </Button>
      ))}
    </div>
  );
}
