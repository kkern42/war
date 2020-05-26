import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Display from './Display.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      pc: [],
      player: [],
      play: false,
    };
  }

  createdeck = () => {
    let deck = [];
    let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    let suits = ["Spades", "Hearts", "Clubs", "Diamonds"]

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        deck.push({ value: nums[j], suit: suits[i] });
      }
    }
    let shuffle = [];
    let rands = [];
    for (let i = 0; i < 52; i++) {
      rands.push(i);
    }
    for (let i = 0; i < 52; i++) {
      let num = Math.floor(Math.random() * (+(deck.length) - +0)) + +0;
      shuffle.push(deck[num]);
      rands.splice(num, 1);
      deck.splice(num, 1);
    }
    this.setState({ cards: shuffle });
    this.setState({ pc: shuffle.slice(0, 26) });
    this.setState({ player: shuffle.slice(26, 52) });
  }

  start = () => {
    this.setState({ play: true });
    console.log(this.state.player);
    console.log(this.state.pc);
  }

  componentDidMount() {
    this.createdeck();
  }

  render() {
    return (
      <body>
        <div >
          <div style={{ marginLeft: "50vw", marginTop: "20vw" }}>
            {
              !this.state.play && [
                <button onClick={this.start}>Start</button>
              ]
            }
          </div>
          <div >
            {
              this.state.play && [
                <div>
                  <Display user={this.state.player} machine={this.state.pc} />
                </div>
              ]
            }
          </div>
        </div>
      </body>
    );
  };


}

export default App;
