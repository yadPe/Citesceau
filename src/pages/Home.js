import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import NavBar from '../NavBar';
>>>>>>> dev

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1 className="Citoyen"> Citoyen </h1>
        <Link to="/NewProjet">
          <Button color="primary" size="lg" className="PropositionProjet">Proposition Projet</Button>
        </Link>
        <Link to="/VueEnsemble">
          <Button color="primary" size="lg" className="ConsultationProjet">Consultation Projets</Button>
        </Link>
=======
        <h1> Citoyen </h1>
        <Button color="primary" size="lg" className="PropositionProjet">Proposition Projet</Button>
        <Button color="primary" size="lg" className="ConsultationProjet">Consultation Projets</Button>
        <NavBar />
>>>>>>> dev
      </div>
    );
  }
}

export default Home;
