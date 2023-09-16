import "./styles/game-board.css";
import { useState } from "react";
import { Images } from "../../assets/Images";
import { TScore } from "../../types";
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({
  handleScoreChange,
  handleGameEnd,
  currentScore,
}: {
  handleScoreChange: (scoreUpdate: TScore) => void;
  handleGameEnd: (Boolean: boolean) => void;
  currentScore: TScore;
}) {
  const [fishGuessInput, setFishGuessInput] = useState("");
  const [fishIndex, setFishIndex] = useState(0);
  const { correctCount, incorrectCount } = currentScore;
  const nextFishToName = initialFishes[fishIndex];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          fishGuessInput === nextFishToName.name
            ? handleScoreChange({
                correctCount: correctCount + 1,
                incorrectCount: incorrectCount,
              })
            : handleScoreChange({
                correctCount: correctCount,
                incorrectCount: incorrectCount + 1,
              });
          fishIndex === initialFishes.length - 1
            ? handleGameEnd(true)
            : setFishIndex(fishIndex + 1);
          setFishGuessInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuessInput.toLowerCase()}
          onChange={(e) => {
            setFishGuessInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
