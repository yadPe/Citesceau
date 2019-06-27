import React, { Component } from 'react';
import NavBar from '../NavBar';
import CardsProjet from './CardsProjet';
import './VueEnsemble.css';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='cardsProject'>
          <CardsProjet />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default VueEnsemble;
