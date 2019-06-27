import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src="https://s3-eu-west-1.amazonaws.com/photos-kidygo/parents/profile-default/profil_homme.svg" alt="Profil" />
        <h2 className="NombrePoints">Nombre de points</h2>
        <h3 className="Votes">Votes</h3>
        <h4 className="Propositions">Proposition</h4>
        <NavBar />
      </div>
    );
  }
}

export default Profil;
