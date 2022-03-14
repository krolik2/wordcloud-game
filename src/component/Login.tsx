import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

import {
  selectRandomScenario,
  updateGameStatus,
  addPlayer,
} from "../features/game/gameSlice";

function Login() {
  const [name, setName] = useState("");
  const words = useSelector((state: RootState) => state.words);
  const { list } = words;

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addPlayer(name));
    dispatch(selectRandomScenario(randomScenarioNumber));
    dispatch(updateGameStatus("playing"));
    setName("");
  };

  const chooseRandom = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min));
  };

  const randomScenarioNumber = chooseRandom(0, list.length - 1);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="heading">Wordcloud game</div>
      <div className="input-wrapper">
        <input
          className="input"
          placeholder="Enter your nickname here..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <button className="button" type="submit">
          play!
        </button>
      </div>
    </form>
  );
}

export default Login;
