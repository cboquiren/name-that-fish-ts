import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    gameEnd: false,
  };
  render() {
    const { gameEnd } = this.state;
    return (
      <>
        <>
          {!gameEnd && <ClassScoreBoard currentScore={this.state} />}
          {!gameEnd && (
            <ClassGameBoard
              currentScore={this.state}
              handleScoreChange={(e) => {
                this.setState(e);
              }}
              handleGameEnd={(e) => {
                this.setState(e);
              }}
            />
          )}
        </>
        {gameEnd && <ClassFinalScore currentScore={this.state} />}
      </>
    );
  }
}
