import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { TClassScore } from "./ClassApp";

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
  currentScore: TClassScore;
  handleScoreChange: (scoreUpdate: TClassScore) => void;
}> {
  state = {
    fishGuessInput: "",
    fishIndex: 0,
    incorrectScore: this.props.currentScore.incorrectCount,
    correctScore: this.props.currentScore.correctCount,
    gameEnd: this.props.currentScore.gameEnd,
  };
  render() {
    const { fishGuessInput, fishIndex, incorrectScore, correctScore, gameEnd } = this.state;
    const { handleScoreChange } = this.props;
    const nextFishToName = initialFishes[fishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <p>
          {incorrectScore} : {correctScore}
        </p>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            fishGuessInput === nextFishToName.name
              ? this.setState({ correctScore: correctScore + 1 })
              : this.setState({ incorrectScore: incorrectScore + 1 });
            fishIndex === initialFishes.length - 1
              ? this.setState({ gameEnd: true })
              : this.setState({ fishIndex: fishIndex + 1 });
            this.setState({ fishGuessInput: "" });
            handleScoreChange({
              incorrectCount: incorrectScore,
              correctCount: correctScore,
              gameEnd: gameEnd,
            });
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
