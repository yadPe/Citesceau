import React, { Component } from 'react';
import './Projet.css';
import Count from './Count';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import { getUrlParams, timeSince } from '../../Helpers'
import CommentairesGet from '../VueEnsemble/CommentairesGet';


class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = getUrlParams('id')
    const { projet, projets } = this.props;
    console.log(id);
    if (id) {
      projet(id).then(data => {
        this.setState({ ...data, id })
      }).catch(console.error)
    }
  }

  render() {
    const { author, creationDate, description, image, points, titre } = this.state;

    let time = null;
    if (creationDate) {
      time = creationDate.toDate()
    }
    return (
      <div>
        <h1 className="Projet">{titre}</h1>
        <img className="ImageProjet" src={image} alt="Jaune" />
        <h2 className="DescriptionTitre">Description du projet</h2>
        <p className="DescriptionProjet">{description}</p>
        <p className="timeSince">Créé il y a {timeSince(new Date(time) || Date.now())}</p>
        <div className="Counttt">
          <Count value={points} />
        </div>
        <h3 className="CommentairesTitre">Commentaires</h3>
        <p className="Commentaires"><CommentairesGet /></p>
      </div>
    );
  }
}

export default withFirebaseContext(Projet);
