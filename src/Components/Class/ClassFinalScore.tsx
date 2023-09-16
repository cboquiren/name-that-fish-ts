import { Component } from "react";
import { TScore } from "../../types";

export class ClassFinalScore extends Component<{ currentScore: TScore }> {
  render() {
    const { incorrectCount, correctCount } = this.props.currentScore;
    const totalCount = incorrectCount + correctCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
