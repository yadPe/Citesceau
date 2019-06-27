import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{
        textAlign: 'center', display: 'flex', flexDirection: 'column',
      }}
      >
        <h1 className="Citoyen"> Citoyen </h1>
        <p className="Accroche">Bienvenue sur Citoyen, la plateforme citoyenne qui vous met au coeur de la ville et de ses decisions. Quels seront les futurs projets d'effesceau? C'est vous qui decidez!</p>
        <Link to="/NewProjet">
          <Button color="primary" size="lg">Proposition Projet</Button>
        </Link>
        <Link to="/VueEnsemble">
          <Button color="primary" size="lg">Consultation Projets</Button>
        </Link>
        <Link to="/CreationProfile">
          <Button color="primary" size="lg">Inscription</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
