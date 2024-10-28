import { Editor, FILL_COLOR } from "@/features/editor/types";
import { ColorPicker } from "@/features/editor/components/color-picker";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { ScrollArea } from "@/components/ui/scroll-area";

interface FillColorPanelProps {
  editor: Editor | undefined;
}

export const FillColorPanel = ({ editor }: FillColorPanelProps) => {
  const value = editor?.getActiveFillColor() || FILL_COLOR;

  const onChange = (color: string) => {
    editor?.changeFillColor(color);
  };

  return (
    <aside>
      <ToolPanelHeader
        title="Fill color"
        description="Add fill color to your element"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <ColorPicker value={value} onChange={onChange} />
        </div>
      </ScrollArea>
    </aside>
  );
};
