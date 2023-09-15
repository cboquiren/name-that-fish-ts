import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export type TClassScore = {
  correctCount: number;
  incorrectCount: number;
  gameEnd: boolean;
};

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    gameEnd: false,
  };
  render() {
    const { gameEnd, incorrectCount, correctCount } = this.state;
    return (
      <>
        <>
          <p>
            {incorrectCount} : {correctCount}
          </p>
          {!gameEnd && <ClassScoreBoard currentScore={this.state} />}
          {!gameEnd && (
            <ClassGameBoard
              currentScore={this.state}
              handleScoreChange={(e) => {
                this.setState(e);
              }}
            />
          )}
        </>
        {gameEnd && <ClassFinalScore />}
      </>
    );
  }
}
