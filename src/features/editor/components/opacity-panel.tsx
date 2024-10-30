import { useEffect, useMemo, useState } from "react";

import { Editor } from "@/features/editor/types";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OpacityPanelProps {
  editor: Editor | undefined;
}

export const OpacityPanel = ({ editor }: OpacityPanelProps) => {
  const initialvalue = editor?.getActiveOpacity() || 1;
  const selectedObject = useMemo(
    () => editor?.selectedObjects[0],
    [editor?.selectedObjects]
  );

  const [opacity, setOpacity] = useState(initialvalue);

  useEffect(() => {
    if (selectedObject) {
      setOpacity(selectedObject.get("opacity") || 1);
    }
  }, [selectedObject]);

  const onChange = (value: number) => {
    editor?.changeOpacity(value);
    setOpacity(value);
  };

  return (
    <aside>
      <ToolPanelHeader
        title="Opacity"
        description="Change the opacity of the selected object"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <Slider
            value={[opacity]}
            onValueChange={([value]) => onChange(value)}
            min={0}
            max={1}
            step={0.01}
          />
        </div>
      </ScrollArea>
    </aside>
  );
};
