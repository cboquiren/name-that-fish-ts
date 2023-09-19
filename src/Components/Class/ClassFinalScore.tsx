import { Component } from "react";
import { TScore } from "../../types";

export class ClassFinalScore extends Component<{ currentScore: TScore; totalGuesses: number }> {
  render() {
    const { totalGuesses } = this.props;
    const { correctCount } = this.props.currentScore;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalGuesses}</p>
        </div>
      </div>
    );
  }
}
