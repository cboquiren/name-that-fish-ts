import { TScore } from "./FunctionalApp";
import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ currentScore }: { currentScore: TScore }) {
  const { correctCount, incorrectCount } = currentScore;
  const totalGuesses = correctCount + incorrectCount;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.slice(totalGuesses).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
