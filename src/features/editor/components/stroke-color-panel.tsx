import { Editor, STROKE_COLOR } from "@/features/editor/types";
import { ColorPicker } from "@/features/editor/components/color-picker";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { ScrollArea } from "@/components/ui/scroll-area";

interface StrokeColorPanelProps {
  editor: Editor | undefined;
}

export const StrokeColorPanel = ({ editor }: StrokeColorPanelProps) => {
  const value = editor?.getActiveStrokeColor() || STROKE_COLOR;

  const onChange = (color: string) => {
    editor?.changeStrokeColor(color);
  };

  return (
    <aside>
      <ToolPanelHeader
        title="Stroke color"
        description="Add stroke color to your element"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <ColorPicker value={value} onChange={onChange} />
        </div>
      </ScrollArea>
    </aside>
  );
};
