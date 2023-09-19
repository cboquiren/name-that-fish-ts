import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../data";
import { TScore } from "../../types";

export class ClassGameBoard extends Component<{
  currentScore: TScore;
  totalGuesses: number;
  handleScoreChange: (scoreUpdate: TScore) => void;
}> {
  state = {
    fishGuessInput: "",
  };
  render() {
    const { handleScoreChange, currentScore, totalGuesses } = this.props;
    const { fishGuessInput } = this.state;
    const { correctCount, incorrectCount } = currentScore;

    const nextFishToName = initialFishes[totalGuesses];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            fishGuessInput === nextFishToName.name
              ? handleScoreChange({
                  incorrectCount: incorrectCount,
                  correctCount: correctCount + 1,
                })
              : handleScoreChange({
                  incorrectCount: incorrectCount + 1,
                  correctCount: correctCount,
                });
            this.setState({ fishGuessInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={fishGuessInput.toLowerCase()}
            onChange={(e) => {
              this.setState({ fishGuessInput: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
