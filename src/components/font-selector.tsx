"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FontSelectorProps {
  value: string;
  onChange: (font: string) => void;
}

export const FontSelector: React.FC<FontSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <Select
      defaultValue="Standard"
      onValueChange={(e) => {
        onChange(e);
      }}
    >
      <SelectTrigger className=" border-none px-2 w-[200px] text-center flex justify-center gap-3 text-lg ">
        <SelectValue placeholder={"Select language"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Standard">Standard</SelectItem>
        <SelectItem value="Old Banner">Old Banner</SelectItem>
        <SelectItem value="OS2">OS2</SelectItem>
      </SelectContent>
    </Select>
  );
};
