import React, { Component } from 'react';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './Profil.css';
import Header from '../Header';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    const { user, authorId } = this.props;
    user(localStorage.getItem('userId')).then((data) => {
      this.setState({ ...data });
    });


    // projets().then((data) => {
    //   this.setState({ ...data });
    // });
  }

  identification = () => {
    const { authorId } = this.props;
    authorId().then((data) => {
      this.setState({ ...data });
    }); console.log(authorId);
  }


  render() {
    const {
      image, points,
    } = this.state;
    const { authorId, projets } = this.props;
    console.log(authorId);
    return (
      <div>
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src={image} alt="profil" />
        <h2 className="NombrePoints">Nombre de points</h2>
        <h3 className="NombresPoints2">
          {points}
          {' '}
          points
        </h3>
        <h3 className="Votes">Votes</h3>
        {projets}
        <h4 className="Propositions">Proposition</h4>
        {/* {authorId ? { points } : ''} */}
      </div>
    );
  }
}

export default (withFirebaseContext(Profil));
