import { Component } from "react";
import "./styles/score-board.css";
import { TScore } from "../../types";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component<{ currentScore: TScore }> {
  render() {
    const { incorrectCount, correctCount } = this.props.currentScore;
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
}
