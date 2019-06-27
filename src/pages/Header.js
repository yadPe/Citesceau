import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      image: 'https://image.noelshack.com/fichiers/2019/26/4/1561629356-nopic.jpg',
    };
  }

  uploadPoint = () => {
    this.setState({
      points: 0,
    });
  }

  uploadImage = () => {
    this.setState({
      image: '',
    });
  }

  render() {
    const { points } = this.state;
    const { image } = this.state;
    return (
      <header style={{
        height: '55px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5A5D62',
        color: 'white',
        fontWeigth: 'bold',
        padding: '0 10px 0 10px',
      }}
      >
        <div style={{ fontSize: '26px' }}>Hackatown</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '145px' }}>
          <div style={{
            borderRadius: '440px',
            width: '33px',
            height: '30px',
            marginLeft: '34px',
          }}
          >
            <Link to="/profil">
              <img
                src={image}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '440px',
                }}
                alt="profile"
              />
            </Link>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.3px solid',
            borderRadius: '4px',
            height: '30px',
            width: '70px',
            backgroundColor: 'grey',
            fontSize: '20px',
            boxShadow: '0px 0px 1px white',
          }}
          >
            {points}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
