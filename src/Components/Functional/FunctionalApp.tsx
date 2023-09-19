import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../data";
import { useState } from "react";

export function FunctionalApp() {
  const [currentScore, setCurrentScore] = useState({ correctCount: 0, incorrectCount: 0 });
  const totalCount = currentScore.correctCount + currentScore.incorrectCount;
  const isGameOver = totalCount >= initialFishes.length ? true : false;
  return (
    <>
      {!isGameOver && <FunctionalScoreBoard currentScore={currentScore} totalCount={totalCount} />}
      {!isGameOver && (
        <FunctionalGameBoard
          currentScore={currentScore}
          totalCount={totalCount}
          handleScoreChange={(scoreUpdate) => {
            setCurrentScore(scoreUpdate);
          }}
        />
      )}
      {isGameOver && <FunctionalFinalScore currentScore={currentScore} totalCount={totalCount} />}
    </>
  );
}
