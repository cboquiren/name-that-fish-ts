import "./styles/game-board.css";
import { useState } from "react";
import { initialFishes } from "../../data";
import { TScore } from "../../types";

export function FunctionalGameBoard({
  handleScoreChange,
  currentScore,
  totalCount,
}: {
  handleScoreChange: (scoreUpdate: TScore) => void;
  currentScore: TScore;
  totalCount: number;
}) {
  const [fishGuessInput, setFishGuessInput] = useState("");
  const { correctCount, incorrectCount } = currentScore;
  const nextFishToName = initialFishes[totalCount];

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
