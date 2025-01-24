import React, { Component } from 'react';

class GuessControl extends Component {
  handleChange = (event) => {
    this.props.onGuessChange(event);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { guess, message } = this.props;
    return (
      <div>
        <input
          type="number"
          value={guess}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit Guess</button>
        <p>{message}</p>
      </div>
    );
  }
}

export default GuessControl;

