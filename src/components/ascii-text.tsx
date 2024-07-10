import React from "react";

function AsciiText({ text, color }: { text: string; color: string }) {
  return (
    <div>
      {text ? (
        <pre style={{ color }}>{text}</pre>
      ) : (
        <div className="p-2 border rounded-md">
          <h1>Enter your text to generate ASCII art</h1>
        </div>
      )}
    </div>
  );
}

export default AsciiText;
