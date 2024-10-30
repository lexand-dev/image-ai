import { Editor } from "@/features/editor/types";
import { ToolPanelHeader } from "@/features/editor/components/tool-panel-header";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TextPanelProps {
  editor: Editor | undefined;
}

export const TextPanel = ({ editor }: TextPanelProps) => {
  return (
    <aside>
      <ToolPanelHeader title="Text" description="Add text to your design" />
      <ScrollArea>
        <div className="p-4 space-y-6">
          <Button onClick={() => editor?.addText("Textbox")} className="w-full">
            Add a textbox
          </Button>
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Heading", {
                fontSize: 80,
                fontWeight: 700
              })
            }
          >
            <span className="text-3xl font-bold">Add a heading</span>
          </Button>
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Subheading", {
                fontSize: 44,
                fontWeight: 600
              })
            }
          >
            <span className="text-xl font-bold">Add a subheading</span>
          </Button>
          <Button
            className="w-full h-16"
            variant="secondary"
            size="lg"
            onClick={() =>
              editor?.addText("Paragraph", {
                fontSize: 32
              })
            }
          >
            Paragraph
          </Button>
        </div>
      </ScrollArea>
    </aside>
  );
};
