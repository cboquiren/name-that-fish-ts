import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export type TScore = {
  correctCount: number;
  incorrectCount: number;
};

export function FunctionalApp() {
  const [currentScore, setCurrentScore] = useState({ correctCount: 0, incorrectCount: 0 });
  const [gameEnd, setGameEnd] = useState(false);

  return (
    <>
      {!gameEnd && <FunctionalScoreBoard currentScore={currentScore} />}
      {!gameEnd && (
        <FunctionalGameBoard
          currentScore={currentScore}
          handleGameEnd={(Boolean) => {
            setGameEnd(Boolean);
          }}
          handleScoreChange={(scoreUpdate) => {
            setCurrentScore(scoreUpdate);
          }}
        />
      )}
      {gameEnd && <FunctionalFinalScore currentScore={currentScore} />}
    </>
  );
}
