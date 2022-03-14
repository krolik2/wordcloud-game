import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

import Words from "../features/words/Words";
import {
  correctAnswers,
  wrongAnswers,
  updateGameStatus,
  score,
} from "../features/game/gameSlice";

function Board() {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => state.words);
  const game = useSelector((state: RootState) => state.game);
  const { scenario, gameStatus } = game;
  const selectedWords = useSelector(
    (state: RootState) => state.game.selectedWords
  );
  const { list } = words;

  const checkAnswers = () => {
    if (scenario === undefined) return null;
    let correct = selectedWords.filter((el) =>
      list[scenario].good_words.includes(el)
    );
    let wrong = selectedWords.filter(
      (el) => !list[scenario].good_words.includes(el)
    );
    dispatch(correctAnswers(correct));
    dispatch(wrongAnswers(wrong));
    dispatch(updateGameStatus("answers"));
  };

  const finishGame = () => {
    dispatch(score(calculateScore()));
    dispatch(updateGameStatus("score"));
  };

  const calculateScore = () => {
    if (scenario !== undefined) {
      const answers = list[scenario].good_words.length;
      const selectedCorrectAnswers = game.correctAnswers.length;
      const selectedWrongAnswers = game.wrongAnswers.length;
      const notSelectedCorrectAnswers = answers - selectedCorrectAnswers;
      return (
        (selectedCorrectAnswers * 2) - (selectedWrongAnswers + notSelectedCorrectAnswers)
      );
    }
  };

  return (
    <>
      {scenario !== undefined && (
        <>
          <h2 className="heading">{list[scenario].question}</h2>
          <div className="board">
            <Words />
          </div>
          <div>
            {gameStatus === "playing" && (
              <button className="button" type="submit" onClick={checkAnswers}>
                check answers
              </button>
            )}
            {gameStatus === "answers" && (
              <button className="button" type="submit" onClick={finishGame}>
                finish game
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Board;
