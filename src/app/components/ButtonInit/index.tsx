import React from "react";

// import { Container } from './styles';

const ButtonInit: React.FC = ({ ...props }) => {
  return (
    <button
      className="fixed bottom-0 w-full bg-[#7CFC00] text-black font-bold py-4 px-20"
      {...props}
    >
      Iniciar
    </button>
  );
};

export default ButtonInit;
