"use client";

import { useEffect, useState } from "react";
import { useFiglet, FigletFont } from "@/hooks/useFiglet";
import AsciiText from "@/components/ascii-text";
import { FontSelector } from "@/components/font-selector";
import { ToolbarActions } from "@/components/tooolbar-actions";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import FontSizeSelector from "@/components/font-size-selector";

function Page() {
  const [text, setText] = useState<string>("");
  const [font, setFont] = useState<string>("Standard");
  const [color, setColor] = useState("#B4D455");
  const [figletText, setSourceText, setFigletFont] = useFiglet();
  const [fontSize, setFontSize] = useState(16);

  const handleCopy = () => {
    if (figletText.trim().length) {
      navigator.clipboard.writeText(figletText);
      toast.success("Copied to clipboard!");
    }
  };

  useEffect(() => {
    setSourceText(text);
  }, [setSourceText, text, color, fontSize]);

  useEffect(() => {
    setFigletFont(font as FigletFont);
  }, [setFigletFont, font]);

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center">
      <div>
        <AsciiText text={figletText} color={color} fontSize={fontSize} />
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] md:max-w-[600px] z-10">
        <div className="space-y-4 mb-4">
          <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="shadow-2xl p-2.5 rounded-xl border  flex-wrap   flex items-center justify-between">
          <div className="flex gap-1">
            <FontSelector value={font} onChange={setFont} />
            <FontSizeSelector value={fontSize} onChange={setFontSize} />
          </div>
          <div>
            <ToolbarActions
              onCopy={handleCopy}
              background={color}
              setBackground={setColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
