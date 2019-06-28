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
        <h1 className="Citoyen"> Citésceau </h1>
        <p className="Accroche">Bienvenue sur Citésceau, la plateforme citoyenne qui vous met au coeur de la ville et de ses decisions. Quels seront les futurs projets d'effesceau? C'est vous qui decidez!</p>
        <Link to="/NewProjet">
          <Button color="info" size="lg" style={{ marginTop: '30px' }}>Proposition Projet</Button>
        </Link>
        <Link to="/VueEnsemble">
          <Button color="info" size="lg">Consultation Projets</Button>
        </Link>
        <Link to="/CreationProfile">
          <Button
            className="CreationProfile"
            size="lg"
            style={{
              width: '45%', fontSize: '18px', marginTop: '100px', backgroundColor: '#3CB371', borderColor: '#3CB371',
            }}
          >
Inscription

          </Button>
        </Link>
        <Link to="/Guide">
          <Button
            className="CreationProfile"
            size="lg"
            style={{
              width: '80%', fontSize: '18px', marginTop: '10px', backgroundColor: '#3CB371', borderColor: '#3CB371',
            }}
          >
Comment ça marche?

          </Button>
        </Link>
      </div>
    );
  }
}

export default Home;
