import React, { Component } from 'react';
import './Projet.css';
import Count from './Count';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import timeSince from '../../Helpers/timeSince'

class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getUrlParameter = (name) => {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
  }

  componentDidMount() {
    const id = this.getUrlParameter('id')
    const { projet } = this.props;
    if (id) {
      projet(id).then(data => {
        this.setState({ ...data, id })
      }).catch(console.error)
    }
  }

  render() {
    const { author, creationDate, description, image, points, titre } = this.state;
    let time = null;
    if (creationDate){
      time = creationDate.seconds
    }
    console.log(creationDate)
    console.log(timeSince(new Date(time) || new Date()))
    return (
      <div>
        <h1 className="Projet">{titre}</h1>
        <img className="ImageProjet" src={image} alt="Jaune" />
        <h2 className="DescriptionTitre">Description du projet</h2>
        <p className="DescriptionProjet">{description}</p>
        {/* <p className="timeSince">Créé il y a {timeSince(new Date(creationDate.seconds || Date.now()) || new Date())}</p> */}
        <div className="Counttt">
          <Count value={points} />
        </div>
        <h3 className="CommentairesTitre">Commentaires</h3>
        <p className="Commentaires">Voici mon commentaire je suis le boss ou pas?!</p>
      </div>
    );
  }
}

export default withFirebaseContext(Projet);
