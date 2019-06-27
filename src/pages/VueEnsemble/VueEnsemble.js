import React, { Component } from 'react';
import NavBar from '../NavBar';
import './VueEnsemble.css';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default VueEnsemble;
