import React, { Component } from 'react';
import './Projet.css';
import Count from './Count';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import { getUrlParams, timeSince } from '../../Helpers'
import CommentairesGet from '../VueEnsemble/CommentairesGet';


class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Commentaires: [],
    };
  }

  componentDidMount() {
    const id = getUrlParams('id')
    const { projet, projets, commentaires } = this.props;
    console.log(id);
    if (id) {
      projet(id).then(data => {
        this.setState({ ...data, id },
          () => {
            commentaires(id)
              .then(userComments => this.setState({ userComments }))
              //then(data => this.setState({ com: data }))
              .catch(console.error)
          })
      }).catch(console.error)
    }
  }


  render() {
    const {
      author, creationDate, description, image, points, titre,
    } = this.state;
    let time = null;
    if (creationDate) {
      time = creationDate.toDate();
    }
    return (
      <div>
        <h1 className="Projet">{titre}</h1>
        <img className="ImageProjet" src={image} alt="Jaune" style={{ maxWidth: '300px' }} />
        <h2 className="DescriptionTitre">Description du projet</h2>
        <p className="DescriptionProjet">{description}</p>
        <p className="timeSince">
          Créé il y a
          {' '}
          {timeSince(new Date(time) || Date.now())}
        </p>
        <hr />
        <div className="Counttt">
          <Count value={points} />
        </div>
        <hr />
        <h3 className="CommentairesTitre">Commentaires</h3>
        <p className="Commentaires"><CommentairesGet com={this.state.userComments} /></p>
      </div>
    );
  }
}

export default withFirebaseContext(Projet);
