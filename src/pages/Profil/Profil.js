import React, { Component } from 'react';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        image: '',
        mail: '',
        nom: '',
        prénom: '',
      },
    };
  }

  componentWillMount() {
    const { user } = this.props;
    user(localStorage.getItem('userId')).then(this.setState({
      image: user.image,
      mail: user.mail,
      nom: user.nom,
      prénom: user.prénom,
    }));
  }


  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src={userInfo.image ? userInfo.image : 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png%27%7D'} />
        <h2 className="NombrePoints">Nombre de points</h2>
        <h3 className="NombresPoints2">
          {userInfo.Points}
          {' '}
          points
        </h3>
        <h3 className="Votes">Votes</h3>
        <h4 className="Propositions">Proposition</h4>
      </div>
    );
  }
}

export default withFirebaseContext(Profil);
