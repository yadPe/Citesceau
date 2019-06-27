import React, { Component } from 'react';
import Header from '../Header';
import CardsProjet from './CardsProjet';
import './VueEnsemble.css';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tabCards = [{
      author: 'Jack',
      creationDate: '27 Juin 2019',
      description: 'Circa hos dies Lollianus primae lanuginis adulescens, Lampadi filius ex praefecto, exploratius causam Maximino spectante, convictus codicem noxiarum artium nondum per aetatem firmato consilio descripsisse, exulque mittendus, ut sperabatur, patris inpulsu provocavit ad principem, et iussus ad eius comitatum duci, de fumo, ut aiunt, in flammam traditus Phalangio Baeticae consulari cecidit funesti carnificis manu.',
      image: 'https://image.noelshack.com/fichiers/2019/26/4/1561627553-546335.jpg',
      points: 0,
      titre: 'Bouteille biere hellooo',
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
      </div>
    );
  }
}

export default VueEnsemble;
