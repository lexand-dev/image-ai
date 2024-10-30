import { Editor, fonts } from "@/features/editor/types";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FontPanelProps {
  editor: Editor | undefined;
}

export const FontPanel = ({ editor }: FontPanelProps) => {
  const value = editor?.getActiveFontFamily();

  return (
    <aside>
      <ToolPanelHeader
        title="Font"
        description="Choose from a variety of fonts and styles."
      />
      <ScrollArea>
        <div className="p-4 space-y-1">
          {fonts.map((font) => (
            <Button
              key={font}
              variant="secondary"
              size="lg"
              className={cn(
                "w-full h-16 justify-start text-left",
                value === font && "border-2 border-blue-400"
              )}
              style={{
                fontFamily: font,
                fontSize: "16px",
                padding: "8px 16px"
              }}
              onClick={() => editor?.changeFontFamily(font)}
            >
              {font}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
