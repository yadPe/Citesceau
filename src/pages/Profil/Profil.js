/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
        <h1 className="Profil">Profil</h1>
        <h2 className="firstName">{firstName}</h2>
        <h2 className="firstName">{name}</h2>
        <img className="ImageProfil" src={image} alt="profil" />
        <h2 className="NombrePoints">Nombre de points</h2>
        <h3 className="NombresPoints2">
          {points}
          {' '}
          bitcolds
        </h3>
        {points}
        <h4 className="Propositions">Proposition</h4>
        {projets.map(projet => (
          <div onClick={() => history.push(`/projet?id=${projet.id}`)}>{projet.titre}</div>

        ))}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(Profil));
