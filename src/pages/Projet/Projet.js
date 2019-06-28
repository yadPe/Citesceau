import React, { Component } from 'react';
import './Projet.css';
import Count from './Count';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import { getUrlParams, timeSince } from '../../Helpers';

class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteStatus: {msg : null, status: null},
    };
  }

  componentDidMount() {
    const id = getUrlParams('id');
    const { projet, projets } = this.props;
    if (id) {
      projet(id).then((data) => {
        this.setState({ ...data, id });
      }).catch(console.error);
    }
  }

  submitVote = (points) => {
    const { id } = this.state
    const { transaction } = this.props;
    transaction(localStorage.getItem('userId'), id, points)
    .then(success => this.setState({voteStatus: {msg : `Vos bitcolds ont étés envoyés`, status: 'success'}}))
    .catch(failed => this.setState({voteStatus: {msg: failed.code === 1 ? `Vous n'avez pas assez de bitcolds` : `Erreur interne`, status: 'error'}}));
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
        <p className="timeSince" style={{textAlign:'center'}}>
Créé il y a
          {' '}
          {timeSince(new Date(time) || Date.now())}
        </p>
        <hr />
        <div className="Counttt">
          <Count value={points} submit={this.submitVote} />
          
        </div>
        <p style={{textAlign: "center", color: this.state.voteStatus.status === 'success' ? 'rgb(60, 179, 113)' : 'rgb(178,34,34)'}}>{this.state.voteStatus.msg}</p>
        <hr />
        <h3 className="CommentairesTitre">Commentaires</h3>
        <p className="Commentaires">Voici mon commentaire je suis le boss ou pas?!</p>
      </div>
    );
  }
}

export default withFirebaseContext(Projet);
