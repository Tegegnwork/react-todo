import React, { Component } from 'react';
import GuessControl from './GuessControl';

class NumberGuessingGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: ''
    };
  }

  handleGuessChange = (event) => {
    this.setState({ guess: event.target.value });
  };

  handleSubmit = () => {
    const { guess, targetNumber } = this.state;
    if (parseInt(guess) === targetNumber) {
      this.setState({ message: 'Correct!' });
    } else {
      this.setState({ message: 'Try again!' });
    }
  };

  render() {
    const { guess, message } = this.state;
    return (
      <div>
        <h1>Guess the Number Game</h1>
        <GuessControl
          guess={guess}
          message={message}
          onGuessChange={this.handleGuessChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default NumberGuessingGame;
