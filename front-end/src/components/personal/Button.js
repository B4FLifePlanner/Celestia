import React from "react";

function Button({ textColor, bgColor, hoverColor, hoverText, text, onClick }) {
  return (
    <button
      onClick={onClick}
        type="button"
      className="duration-500 rounded-2xl w-fit h-fit px-7 py-1 font-bold flex items-center justify-center"
      style={{ color: textColor, backgroundColor: bgColor }}
      onMouseEnter={(e) => {
        if (hoverColor) {
          e.target.style.backgroundColor = hoverColor;
        }
        if (hoverText) {
          e.target.style.color = hoverText;
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = textColor;
      }}
    >
      {text}

    </button>
  );
}
export default Button