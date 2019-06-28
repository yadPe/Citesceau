import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

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
    if (!this.state.count >= 1) return
    this.setState({
      count: this.state.count - 1,
    });
  }

  decrement10 = () => {
    if (this.state.count < 10) return
    this.setState({
      count: this.state.count - 10,
    });
  }


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
          <button className="btn btn-info" onClick={() => this.props.submit(this.state.count)} disabled={!this.state.count > 0}>Valider</button>
        </div>
      </div>
    );
  }
}

export default Count;
