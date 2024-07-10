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

const fontOptions = [
  "Standard",
  "Old Banner",
  "OS2",
  "Avatar",
  "Bubble",
  "Chunky",
  "Cricket",
  "Doom",
  "Goofy",
  "Graffiti",
  "Isometric1",
];

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
        <SelectValue placeholder={"Select font"} />
      </SelectTrigger>
      <SelectContent>
        {fontOptions.map((font) => (
          <SelectItem key={font} value={font}>
            {font}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
