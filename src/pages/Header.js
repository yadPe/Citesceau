import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withFirebaseContext from '../Firebase/withFirebaseContext';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    const { user } = this.props;
    user(localStorage.getItem('userId')).then(userInfo => this.setState({userInfo}))
  }
  

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    user(localStorage.getItem('userId')).then(userInfo => this.setState({userInfo}))
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
        <div style={{ fontSize: '20px', fontFamily: 'Titre' }}>Citésceau</div>
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
                src={userInfo.image}
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
            {userInfo.points}
          </div>
        </div>
      </header>
    );
  }
}

export default withFirebaseContext(Header);
