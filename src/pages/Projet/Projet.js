import React, { Component } from 'react';
import './Projet.css';

class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="Projet">Projet</h1>
        <img className="ImageProjet" src="https://academy.visiplus.com/blog/wp-content/uploads/2017/10/project-tools.jpg" alt="Jaune" />
        <h2 className="DescriptionTitre">Description du projet</h2>
        <p className="DescriptionProjet">Voici la description de mon projet wouhouhou je vais changer le monde!</p>
        <h3 className="CommentairesTitre">Commentaires</h3>
        <p className="Commentaires">Voici mon commentaire je suis le boss ou pas?!</p>
      </div>
    );
  }
}

export default Projet;
