"use client";

import { fabric } from "fabric";
import { useCallback, useEffect, useRef, useState } from "react";

import { useEditor } from "@/features/editor/hooks/use-editor";
import { SidebarEditor } from "@/features/editor/components/sidebar-editor";
import { Navbar } from "@/features/editor/components/navbar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { Footer } from "@/features/editor/components/footer";
import { ActiveTool } from "@/features/editor/types";

import { useSidebar } from "@/components/ui/sidebar";

export const Editor = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>("select");
  const { setOpen: setOpenSidebar } = useSidebar();

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === activeTool) {
        setOpenSidebar(false);
        return setActiveTool("select");
      }

      if (tool === "draw") {
        // TODO: Enable drawing mode
      }

      if (activeTool === "draw") {
        // TODO: Disable drawing mode
      }

      setActiveTool(tool);
      setOpenSidebar(true);
    },
    [activeTool]
  );

  const { init, editor } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true
    });

    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <>
      <SidebarEditor
        editor={editor}
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
      <main className="relative flex min-h-svh flex-1 flex-col bg-background overflow-auto">
        <div className="h-full flex flex-col">
          <Navbar
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <Toolbar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
            key={JSON.stringify(editor?.canvas.getActiveObject())}
          />
          <div className="h-[calc(100%-124px)] bg-muted" ref={containerRef}>
            <canvas ref={canvasRef} />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};
