import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showError: false };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.state.showError) this.setState({ showError: false });
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    const { counter } = this.state;
    if (counter > 0) this.setState({ counter: counter - 1 });
    else this.setState({ showError: true });
  }

  render() {
    const { counter, showError } = this.state;

    const errorMessage = (
      <p style={{ color: 'red' }} data-test="error-message">
        The counter can not go below 0
      </p>
    );

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button data-test="increment-button" onClick={this.increment}>
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement Counter
        </button>
        {showError && errorMessage}
      </div>
    );
  }
}

export default App;
