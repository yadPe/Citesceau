import React, { Component } from 'react';

class Header extends Component {
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
        Points: 100,
      },
    });
  }

  render() {
    const { userInfo } = this.state;
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
            <img
              src={userInfo.Image}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '440px',
              }}
              alt="profile"
            />
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
            {userInfo.Points}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
