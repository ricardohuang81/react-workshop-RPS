import React, { Component} from 'react';
import PlayerCard from './PlayerCard';


class Game extends Component {
  // let playerOneMove = this.state.playerOne;
  // let playerTwoMove = this.state.playerTwo;

  constructor() {
    super();
    this.signs = ["rock", "paper", "scissors"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors"
    };
  }

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * this.signs.length)],
      playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)]
    })
  }



  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;
    if (playerOne === playerTwo) {
      return "Tie!";
    } else if ((playerOne === "rock" && playerTwo === "scissors") || (playerOne === "scissors" && playerTwo === "paper") || (playerOne === "paper" && playerTwo === "rock")) {
      return "Player One Wins";
    } else {
      return "Player Two Wins";
    }
  }

  render() {

    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">
          {this.decideWinner()}
        </div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
    );
  }
}


export default Game;
