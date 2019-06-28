import React, { Component } from 'react';
import Header from '../Header';
import CardsProjet from './CardsProjet';
import './VueEnsemble.css';
import withFirebaseContext from '../../Firebase/withFirebaseContext';

class VueEnsemble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    const { projets } = this.props;
    projets()
      .then(projetsList => this.setState({ projects: projetsList }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.projects.map(card => (
          <CardsProjet
            creationDate={new Date(card.creationDate.toDate()).toDateString()}
            description={card.description}
            image={card.image}
            points={card.points}
            titre={card.titre}
            projectId={card.id}
          />
        ))}
      </div>
    );
  }
}

export default withFirebaseContext(VueEnsemble);
