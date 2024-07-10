import { useState, useEffect } from "react";
import figlet, { Fonts } from "figlet";

export type FigletFont = Fonts;
type FontLoadStatus = {
  [fontName in FigletFont]: boolean;
};

export const useFiglet = (initialFont: FigletFont = "Standard") => {
  const [font, setFont] = useState(initialFont);
  const [figletText, setFigletText] = useState<string>("");
  const [sourceText, setSourceText] = useState("");
  const [fontLoadStatus, setFontLoadStatus] = useState({
    [font]: false,
  } as FontLoadStatus);
  useEffect(() => {
    if (!fontLoadStatus[font]) {
      return;
    }
    figlet.text(sourceText, { font }, (_, result): void => {
      if (result !== undefined) {
        setFigletText(result);
      }
    });
  }, [sourceText, font, fontLoadStatus]);
  useEffect((): void => {
    if (fontLoadStatus[font]) {
      return;
    }

    import(`figlet/importable-fonts/${font}.js`).then(
      (module: { default: string }): void => {
        figlet.parseFont(font, module.default);
        setFontLoadStatus((prev: FontLoadStatus) => {
          return Object.assign({}, prev, { [font]: true });
        });
      }
    );
  }, [font]);

  return [figletText, setSourceText, setFont] as const;
};
