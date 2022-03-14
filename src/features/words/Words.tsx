import { RootState } from "../../app/store";
import Word from "../../component/Word";
import { useSelector } from "react-redux";

const Words = () => {
  const words = useSelector((state: RootState) => state.words);
  const game = useSelector((state: RootState) => state.game);
  const { scenario, gameStatus, correctAnswers, wrongAnswers, selectedWords } =
    game;
  const { list } = words;

  return (
    <>
      {gameStatus === "playing" &&
        scenario !== undefined &&
        list[scenario].all_words.map((el) => (
          <Word styleW="word" key={el} text={el} />
        ))}
      {gameStatus === "answers" && scenario !== undefined && (
        <>
          {list[scenario].all_words
            .filter((el) => !selectedWords.includes(el))
            .map((el) => (
              <Word key={el} styleW="word" text={el} />
            ))}
          {correctAnswers.map((el) => (
            <Word key={el} styleW="word word-correct" text={el} />
          ))}
          {wrongAnswers.map((el) => (
            <Word key={el} styleW="word word-wrong" text={el} />
          ))}
        </>
      )}
    </>
  );
};

export default Words;
