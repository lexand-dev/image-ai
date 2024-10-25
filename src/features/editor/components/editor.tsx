"use client";

import { fabric } from "fabric";
import { useEffect, useRef } from "react";

import { useEditor } from "@/features/editor/hooks/use-editor";
import { EditorSidebar } from "./sidebar";
import { Navbar } from "@/features/editor/components/navbar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { Footer } from "@/features/editor/components/footer";

import { SidebarProvider } from "@/components/ui/sidebar";

export const Editor = () => {
  const { init } = useEditor();

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
    <SidebarProvider>
      <EditorSidebar />
      <main className="relative flex min-h-svh flex-1 flex-col bg-background overflow-auto">
        <div className="h-full flex flex-col">
          <Navbar />
          <Toolbar />
          <div className="h-[calc(100%-124px)] bg-muted" ref={containerRef}>
            <canvas ref={canvasRef} />
          </div>
          <Footer />
        </div>
      </main>
    </SidebarProvider>
  );
};
