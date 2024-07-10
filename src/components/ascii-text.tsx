import React from "react";

function AsciiText({
  text,
  color,
  fontSize,
}: {
  text: string;
  color: string;
  fontSize: number;
}) {
  return (
    <div>
      {text ? (
        <pre style={{ color, fontSize }}>{text}</pre>
      ) : (
        <div className="p-2 border rounded-md">
          <h1>Enter your text to generate ASCII art</h1>
        </div>
      )}
    </div>
  );
}

export default AsciiText;
