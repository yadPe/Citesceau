import React, { Component } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import CommentairesGet from './CommentairesGet';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default VueEnsemble;
