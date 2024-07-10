import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";

interface FontSizeProps {
  value: number;
  onChange: (size: number) => void;
}

function FontSizeSelector({ value, onChange }: FontSizeProps) {
  const fontSizeOptions = [8, 12, 16, 20, 24, 28, 32];
  return (
    <div>
      <Select
        defaultValue={value.toString()}
        onValueChange={(e) => {
          onChange(parseInt(e));
        }}
      >
        <SelectTrigger className="border-none px-2 w-[100px] text-center flex justify-center gap-3 text-lg">
          <SelectValue placeholder={"Font Size"} />
        </SelectTrigger>
        <SelectContent>
          {fontSizeOptions.map((size) => (
            <SelectItem key={size} value={size.toString()}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FontSizeSelector;
