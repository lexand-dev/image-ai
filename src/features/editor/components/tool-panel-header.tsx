interface ToolPanelHeaderProps {
  title: string;
  description?: string;
}

export const ToolPanelHeader = ({
  title,
  description
}: ToolPanelHeaderProps) => {
  return (
    <div className="p-4 space-y-1">
      <h2 className="text-sm font-medium">{title}</h2>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};
