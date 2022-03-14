import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";

import { getWords } from "../src/features/words/wordsSlice";
import Board from "./component/Board";
import Login from "./component/Login";
import Score from "./component/Score";

function App() {
  const game = useSelector((state: RootState) => state.game);
  const words = useSelector((state: RootState) => state.words);
  const dispatch = useDispatch();

  const { gameStatus } = game;
  const { status } = words;

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <div className="app">
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && gameStatus === "idle" && <Login /> }
      {(gameStatus === "playing" || gameStatus === "answers") && <Board /> }
      {gameStatus === "score" && <Score />}
    </div>
  );
}

export default App;
