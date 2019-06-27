import React, { Component } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import CommentairesGet from './CommmentairesGet';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <CommentairesGet />
        <NavBar />
      </div>
    );
  }
}

export default VueEnsemble;
