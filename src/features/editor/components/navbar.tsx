"use client";

import { CiFileOn } from "react-icons/ci";
import { BsCloudCheck } from "react-icons/bs";
import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2
} from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[50px] gap-x-8 border-b lg:pl-[34px]">
      <SidebarTrigger />
      <div className="w-full flex items-center gap-x-1 h-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              File
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}} // TODO: Implement file open
              className="flex items-center gap-x-2"
            >
              <CiFileOn className="!size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">
                  Open a JSON file
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" className="mx-2" />
        <Hint label="Select" side="bottom" sideOffset={10}>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {}} // TODO: Implement pointer tool
            className="" // TODO: Add Dynamic class
          >
            <MousePointerClick className="!size-4" />
          </Button>
        </Hint>
        <Hint label="Undo" side="bottom" sideOffset={10}>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {}} // TODO: Implement pointer tool
            className="" // TODO: Add Dynamic class
          >
            <Undo2 className="!size-4" />
          </Button>
        </Hint>
        <Hint label="Redo" side="bottom" sideOffset={10}>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {}} // TODO: Implement pointer tool
            className="" // TODO: Add Dynamic class
          >
            <Redo2 className="!size-4" />
          </Button>
        </Hint>
        <Separator orientation="vertical" className="mx-2" />
        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="!size-[20px] text-muted-foreground" />
          <div className="text-xs text-muted-foreground"> Saved</div>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost">
                Export
                <Download className="!size-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem
                onClick={() => {}} // TODO: Add functionality
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="!size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">
                    Save for later editing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}} // TODO: Add functionality
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="!size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for sharing on the web
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}} // TODO: Add functionality
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="!size-8" />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for printing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {}} // TODO: Add functionality
                className="flex items-center gap-x-2"
              >
                <CiFileOn className="!size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for editing in vector software
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* TODO: Add user-button component */}
        </div>
      </div>
    </nav>
  );
};
