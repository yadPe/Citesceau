import React from 'react';

class Count extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  increment10 = () => {
    this.setState({
      count: this.state.count + 10,
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  decrement10 = () => {
    this.setState({
      count: this.state.count - 10,
    });
  }

  render() {
    return (
      <div>
        <h2 className="Points">Points</h2>
        <button onClick={this.decrement10}>-10</button>
        <button onClick={this.decrement}>-</button>
        <span className="Resultats">{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.increment10}>+10</button>
      </div>
    );
  }
}

export default Count;
