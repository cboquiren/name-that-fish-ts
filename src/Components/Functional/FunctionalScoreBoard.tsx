import { initialFishes } from "../../data";
import { TScore } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  currentScore,
  totalCount,
}: {
  currentScore: TScore;
  totalCount: number;
}) {
  const { correctCount, incorrectCount } = currentScore;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {initialFishes
          .map((fish) => fish.name)
          .slice(totalCount)
          .map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
