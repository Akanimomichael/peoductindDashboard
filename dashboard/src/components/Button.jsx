import React from "react";

function Button({ bgColor, color, size, text, borderRadius }) {
  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
