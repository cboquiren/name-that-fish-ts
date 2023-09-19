import { Component } from "react";
import "./styles/score-board.css";
import { TScore } from "../../types";
import { initialFishes } from "../../data";

export class ClassScoreBoard extends Component<{ currentScore: TScore; totalGuesses: number }> {
  render() {
    const { totalGuesses } = this.props;
    const { incorrectCount, correctCount } = this.props.currentScore;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {initialFishes
            .map((fish) => fish.name)
            .slice(totalGuesses)
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
}
