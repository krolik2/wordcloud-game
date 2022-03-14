import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord, removeWord } from "../features/game/gameSlice";
import { RootState } from "../app/store";

interface WordsProps {
  text: string;
  styleW: string;
}

const Word = ({ text, styleW }: WordsProps) => {
  const [isSelected, setSelected] = useState(false);
  const game = useSelector((state: RootState) => state.game);
  const { gameStatus, } = game;

  const dispatch = useDispatch();

  const toggleSelected = () => {
    dispatch(addWord(text));
    setSelected(!isSelected);
    if (isSelected === true) {
      dispatch(removeWord(text));
    }
  };

  return (
    <>
      {gameStatus === "playing" && (
        <div
          className={!isSelected ? "word" : "word word-selected"}
          onClick={toggleSelected}
        >
          {text}
        </div>
      )}
      {gameStatus === "answers" && <div className={styleW}>{text}</div>}
    </>
  );
};

export default Word;
