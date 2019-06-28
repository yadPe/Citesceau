/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import { withRouter } from 'react-router';
import Header from '../Header';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projets: [],
    };
  }

  async componentWillMount() {
    const { user, getProjectByAuthorId } = this.props;
    let { profile } = this.state;
    const userId = localStorage.getItem('userId');
    await user(userId).then((data) => {
      profile = data;
    });

    await getProjectByAuthorId(userId).then((projets) => {
      this.setState({
        projets, profile,
      });
    });
  }

  render() {
    const {
      profile, projets,
    } = this.state;
    const { history } = this.props;
    const {
      firstName, name, image, points,
    } = profile;

    return (
      <div>
        <Header />
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src={image} alt="profil" />
        <h2 className="firstName">
          {firstName}
          {' '}
          {name}
        </h2>
        <Badge className="NombresPoints2">
          {points}
          {' '}
          bitcolds
        </Badge>
        <hr />
        <h3 className="Votes">Votes</h3>
        <h4 className="Propositions">Mes propositions de projets</h4>
        {projets.map(projet => (
          <div className="projett" onClick={() => history.push(`/projet?id=${projet.id}`)}>{projet.titre}</div>
        ))}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(Profil));
