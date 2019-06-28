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

  /* valider = () => {

  });
} */

  render() {
    return (
      <div className="buttoon">
        <h2 className="Points">Bitcold</h2>
        <button className="bouton" onClick={this.decrement10}>-10</button>
        {' '}
        <button className="bouton" onClick={this.decrement}>-</button>
        {' '}
        <span className="Resultats">{this.state.count}</span>
        {' '}
        <button className="bouton" onClick={this.increment}>+</button>
        {' '}
        <button className="bouton" onClick={this.increment10}>+10</button>
        {' '}
        <div className="boutonval">
          <button className="btn btn-info" onClick={this.valider}>Valider</button>
        </div>
      </div>
    );
  }
}

export default Count;
