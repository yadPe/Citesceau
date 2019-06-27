import React, { Component } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import CardsProjet from './CardsProjet';
import './VueEnsemble.css';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tabCards = [{
      author: 'Jack',
      creationDate: '27 Juin 2019',
      description: 'zpoefjzeoifjzeofzpoefjzedqsdqsdqsd qsd qsd qsd qsd oifjzeof',
      image: 'https://image.noelshack.com/fichiers/2019/26/4/1561627553-546335.jpg',
      points: 0,
      titre: 'azd azd a dsq dsq dqsd qsd qs dza daz dazd azd azd azd azd azd azzad za dazd azd azd azd azd azd azd azd dazz',
    }];
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        {this.tabCards.map(card => (
          <CardsProjet
            author={card.author}
            creationDate={card.creationDate}
            description={card.description}
            image={card.image}
            points={card.points}
            titre={card.titre}
          />
        ))}
        <NavBar />
      </div>
    );
  }
}

export default VueEnsemble;
