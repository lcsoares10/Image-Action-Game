"use client";
import React, { useState } from "react";
import ButtonInit from "../components/ButtonInit";
import ButtonTheme from "../components/ButtonTheme";
import { MOCK_TEMAS } from "./mock";

// import { Container } from './styles';

const Game: React.FC = () => {
  const [selectedTemas, setSelectedTemas] = useState<string[]>([]);

  const handleAddTheme = (tema: string) => {
    if (selectedTemas.includes(tema)) {
      setSelectedTemas(selectedTemas.filter((t) => t !== tema));
      return;
    }
    setSelectedTemas([...selectedTemas, tema]);
  };

  return (
    <div className="flex  min-h-screen flex-col items-center justify-between py-24 px-5">
      <div className=" ">
        <h4 className="text-3xl text-white px-20">
          Selecione os temas que deseja jogar!
        </h4>
        <div className="justify-around  gap-4 flex flex-wrap mt-20">
          {MOCK_TEMAS.map((tema) => (
            <ButtonTheme
              key={tema}
              text={tema}
              selected={selectedTemas.includes(tema)}
              onClick={() => handleAddTheme(tema)}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between">
          <ButtonInit />
        </div>
      </div>
    </div>
  );
};

export default Game;
