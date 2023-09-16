import { TScore } from "../../types";
import "./styles/final-score.css";

export const FunctionalFinalScore = ({ currentScore }: { currentScore: TScore }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{currentScore.correctCount}</p>
      <hr />
      <p>{currentScore.correctCount + currentScore.incorrectCount}</p>
    </div>
  </div>
);
