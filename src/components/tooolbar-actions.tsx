"use client";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import GradientPicker from "@/components/gradient-picker";

interface ToolbarActionsProps {
  onCopy: () => void;
  background: string;
  setBackground: (color: string) => void;
}

export const ToolbarActions: React.FC<ToolbarActionsProps> = ({
  onCopy,
  background,
  setBackground,
}) => {
  return (
    <div className="gap-2 flex">
      <Button onClick={onCopy} size="icon" variant="outline">
        <CopyIcon />
      </Button>
      <GradientPicker background={background} setBackground={setBackground} />
    </div>
  );
};
