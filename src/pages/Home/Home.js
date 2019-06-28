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
      <div
        className="home"
        style={{
          textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '0 5% 0 5%',
        }}
      >
        <h1 className="Citoyen"> Citoyen </h1>
        <p className="Accroche">Bienvenue sur Citoyen, la plateforme citoyenne qui vous met au coeur de la ville et de ses decisions. Quels seront les futurs projets d'effesceau? C'est vous qui decidez!</p>
        <Link to="/NewProjet">
          <Button color="info" size="lg" style={{ marginTop: '30px' }}>Proposition Projet</Button>
        </Link>
        <Link to="/VueEnsemble">
          <Button color="info" size="lg">Consultation Projets</Button>
        </Link>
        <Link to="/CreationProfile">
          <Button className="CreationProfile" color="info" size="lg" style={{ width: '45%', fontSize: '18px', marginTop: '10px' }}>Inscription</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
