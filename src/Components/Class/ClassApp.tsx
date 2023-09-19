import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../data";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const totalGuesses = incorrectCount + correctCount;
    const isGameOver = totalGuesses >= initialFishes.length ? true : false;

    return (
      <>
        <>
          {!isGameOver && <ClassScoreBoard currentScore={this.state} totalGuesses={totalGuesses} />}
          {!isGameOver && (
            <ClassGameBoard
              currentScore={this.state}
              totalGuesses={totalGuesses}
              handleScoreChange={(e) => {
                this.setState(e);
              }}
            />
          )}
        </>
        {isGameOver && <ClassFinalScore currentScore={this.state} totalGuesses={totalGuesses} />}
      </>
    );
  }
}
