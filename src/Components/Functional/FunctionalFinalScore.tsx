import { TScore } from "../../types";
import "./styles/final-score.css";

export const FunctionalFinalScore = ({
  currentScore,
  totalCount,
}: {
  currentScore: TScore;
  totalCount: number;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{currentScore.correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
