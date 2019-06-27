import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Navbar className="navbar navbar2 fixed-bottom navbar-light bg-light" color="light" light navbar-fixed-bottom>
          <Link to="/" className="link">
            <div className="navbrand" style={{ marginTop: '-4' }}>
              <div>
                <img src="./assets/home.svg" className="image" alt="" />
              </div>
              <p style={{ fontSize: '14px' }}>Home</p>
            </div>
          </Link>
          <Link to="/NewProjet" className="link">
            <div className="navbrand">
              <div>
                <img src="./assets/edit.svg" className="image" alt="" />
              </div>
              <p style={{ fontSize: '14px' }}>Poster</p>
            </div>
          </Link>
          <Link to="/VueEnsemble" className="link">
            <div className="navbrand">
              <div>
                <img src="./assets/search.svg" className="image" alt="" />
              </div>
              <p style={{ fontSize: '14px' }}>Voter</p>
            </div>
          </Link>
          <Link to="/Profil" className="link">
            <div className="navbrand">
              <div style={{ height: '33px', marginTop: '-7px' }}>
                <img src="https://image.noelshack.com/fichiers/2019/26/4/1561670827-profil-512.png" className="image" alt="" style={{ width: '40px' }} />
              </div>
              <p style={{ fontSize: '14px' }}>Profil</p>
            </div>
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
