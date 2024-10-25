"use client";

import { useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  Image as LucideImage,
  Layers,
  Palette,
  Shapes,
  Text,
  Type
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarRail,
  useSidebar,
  SidebarFooter
} from "@/components/ui/sidebar";

const tools = [
  { name: "Elements", icon: Shapes },
  { name: "Text", icon: Type },
  { name: "Images", icon: LucideImage },
  { name: "Background", icon: Palette },
  { name: "Layers", icon: Layers }
];

export const EditorSidebar = () => {
  const [activeTool, setActiveTool] = useState("Elements");
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar
  } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="floating" className="bg-muted">
      <SidebarHeader className="h-14 flex items-center justify-between px-3">
        {open && <span className="font-semibold">Canva Clone</span>}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {tools.map((tool) => (
              <SidebarMenuItem key={tool.name}>
                <SidebarMenuButton
                  onClick={() => setActiveTool(tool.name)}
                  isActive={activeTool === tool.name}
                >
                  <tool.icon className="mr-2" />
                  {open && <span>{tool.name}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {open && (
          <SidebarGroup>
            <SidebarGroupLabel>{activeTool}</SidebarGroupLabel>
            <SidebarGroupContent>
              {activeTool === "Elements" && <ElementsPanel />}
              {activeTool === "Text" && <TextPanel />}
              {activeTool === "Images" && <ImagesPanel />}
              {activeTool === "Background" && <BackgroundPanel />}
              {activeTool === "Layers" && <LayersPanel />}
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

function ElementsPanel() {
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
          {/*This is where the change is made.  The LucideImage component is used instead of creating a new Image object.  The instructions were unclear on how to handle this situation.*/}
          <LucideImage className="h-8 w-8 text-muted-foreground" />
        </div>
      ))}
      <Button variant="outline" className="col-span-2">
        Upload an image
      </Button>
    </div>
  );
}

function BackgroundPanel() {
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

function LayersPanel() {
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
