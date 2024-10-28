import { FaDiamond } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";

import { Editor } from "@/features/editor/types";
import { ShapeTool } from "@/features/editor/components/shape-tool";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { ScrollArea } from "@/components/ui/scroll-area";

interface ShapeSidebarProps {
  editor: Editor | undefined;
}

export const ShapePanel = ({ editor }: ShapeSidebarProps) => {
  return (
    <aside>
      <ToolPanelHeader title="Shapes" description="Add shapes to your canvas" />
      <ScrollArea>
        <div className="grid grid-cols-3 gap-4 p-4">
          <ShapeTool onClick={() => editor?.addCircle()} icon={FaCircle} />
          <ShapeTool
            onClick={() => editor?.addSoftRectangle()}
            icon={FaSquare}
          />
          <ShapeTool
            onClick={() => editor?.addRectangle()}
            icon={FaSquareFull}
          />
          <ShapeTool onClick={() => editor?.addTriangle()} icon={IoTriangle} />
          <ShapeTool
            onClick={() => editor?.addInverseTriangle()}
            icon={IoTriangle}
            iconClassName="rotate-180"
          />
          <ShapeTool onClick={() => editor?.addDiamond()} icon={FaDiamond} />
        </div>
      </ScrollArea>
    </aside>
  );
};
