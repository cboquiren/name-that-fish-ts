import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { TScore, TGameOver } from "../../types";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component<{
  currentScore: TScore;
  handleScoreChange: (scoreUpdate: TScore) => void;
  handleGameEnd: (gameOver: TGameOver) => void;
}> {
  state = {
    fishGuessInput: "",
    fishIndex: 0,
  };
  render() {
    const { fishGuessInput, fishIndex } = this.state;
    const { handleScoreChange, handleGameEnd, currentScore } = this.props;
    const { correctCount, incorrectCount } = currentScore;
    const nextFishToName = initialFishes[fishIndex];

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
            fishIndex === initialFishes.length - 1
              ? handleGameEnd({ gameEnd: true })
              : this.setState({ fishIndex: fishIndex + 1 });
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
