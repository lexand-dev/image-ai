import {
  Editor,
  STROKE_DASH_ARRAY,
  STROKE_WIDTH
} from "@/features/editor/types";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StrokeWidthPanelProps {
  editor: Editor | undefined;
}

export const StrokeWidthPanel = ({ editor }: StrokeWidthPanelProps) => {
  const widthValue = editor?.getActiveStrokeWidth() || STROKE_WIDTH;
  const typeValue = editor?.getActiveStrokeDashArray() || STROKE_DASH_ARRAY;

  const onChangeStrokeWidth = (value: number) => {
    editor?.changeStrokeWidth(value);
  };

  const onChangeStrokeType = (value: number[]) => {
    editor?.changeStrokeDashArray(value);
  };

  return (
    <aside>
      <ToolPanelHeader
        title="Stroke options"
        description="Modify the storke of your element"
      />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <Label className="text-sm">Stroke width</Label>
          <Slider
            value={[widthValue]}
            onValueChange={([value]) => onChangeStrokeWidth(value)}
          />
        </div>
        <div className="p-4 space-y-4">
          <Label className="text-sm">Stroke type</Label>
          <Button
            onClick={() => onChangeStrokeType([])}
            variant="secondary"
            size="lg"
            className={cn(
              "w-full h-16 justify-start text-left",
              JSON.stringify(typeValue) === `[]` && "border-2 border-blue-500"
            )}
            style={{ padding: "8px 16px" }}
          >
            <div className="w-full border-black rounded-full border-4" />
          </Button>
          <Button
            onClick={() => onChangeStrokeType([8, 8])}
            variant="secondary"
            size="lg"
            className={cn(
              "w-full h-16 justify-start text-left",
              JSON.stringify(typeValue) === `[8,8]` &&
                "border-2 border-blue-500"
            )}
            style={{ padding: "8px 16px" }}
          >
            <div className="w-full border-black rounded-full border-4 border-dashed" />
          </Button>
        </div>
      </ScrollArea>
    </aside>
  );
};
