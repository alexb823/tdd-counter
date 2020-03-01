import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button data-test="increment-button" onClick={this.increment}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
