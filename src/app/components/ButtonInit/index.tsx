import React from "react";

// import { Container } from './styles';

const ButtonInit: React.FC = ({ ...props }) => {
  return (
    <button
      className="absolute bottom-20 bg-[#7CFC00] text-black font-bold py-4 px-20 rounded "
      {...props}
    >
      Iniciar
    </button>
  );
};

export default ButtonInit;
