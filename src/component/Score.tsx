import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function Score() {
  const game = useSelector((state: RootState) => state.game);
  const { player, score } = game;

  return (
    <div className="container">
      <div className="heading">Congratulations, {player}!</div>
      <div className="heading">Your score:</div>
      <div className="heading score">{score} points</div>
    </div>
  );
}

export default Score;
