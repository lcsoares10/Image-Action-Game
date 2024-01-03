import React, { HTMLAttributes } from "react";

interface ButtonThemeProps {
  selected?: boolean;
  text: string;
}

const ButtonTheme: React.FC<
  ButtonThemeProps & HTMLAttributes<HTMLButtonElement>
> = ({ selected, text, ...props }) => {
  return (
    <button
      aria-label="ButtonTheme"
      className={`border-2 border-[#800080] text-white font-bold py-6 w-80 px-4 rounded hover:bg-[#800080] hover:text-white ${
        selected && "bg-[#800080]"
      }  `}
      key={text}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonTheme;
