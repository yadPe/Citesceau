import React, { Component } from 'react';
import './Profil.css';
import Header from '../Header';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  componentWillMount() {
    this.setState({
      userInfo: {
        Image: 'https://firebasestorage.googleapis.com/v0/b/hackatown-645d6.appspot.com/o/Medias%2FProfiles%2FAragorn1024-1230603_140x140.jpg?alt=media&token=53a9dfbf-471c-44fd-92f3-dbf9c3aff7c4',
        Mail: 'Blu@gmail.com',
        Nom: 'Bla',
        Points: 100,
        Prénom: 'Ble',
        id: 'HcaWwmASLB13UTWSTDGp',
      },
    });
  }


  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <Header />
        <div style={{ padding: '5%' }}>
          <h1 className="Profil">Profil</h1>
          <img className="ImageProfil" src={userInfo.Image ? userInfo.Image : 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'} />
          <h2 className="NombrePoints">Nombre de bitcold</h2>
          <h3 className="NombresPoints2">
            {userInfo.Points}
            {' '}
          bitcold
          </h3>
          <h3 className="Votes">Votes</h3>
          <h4 className="Propositions">Proposition</h4>
        </div>
      </div>
    );
  }
}

export default Profil;
