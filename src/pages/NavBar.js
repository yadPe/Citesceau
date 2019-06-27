import React, { Component } from 'react';
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
        <Navbar className="navbar navbar2 fixed-bottom navbar-light bg-light" color="light" light expand="md" navbar-fixed-bottom>
          <NavbarBrand href="/">
            <div className="navbrand">
              <img src="./assets/home.svg" className="image" />
              <p>Home</p>
            </div>
          </NavbarBrand>
          <NavbarBrand href="/NewProjet">
            <div className="navbrand">
              <img src="./assets/edit.svg" className="image" />
              <p>Poster</p>
            </div>
          </NavbarBrand>
          <NavbarBrand href="/VueEnsemble">
            <div className="navbrand">
              <img src="./assets/search.svg" className="image" />
              <p>Voter</p>
            </div>
          </NavbarBrand>
          <NavbarBrand href="/Profil">
            <div className="navbrand">
              <img src="./assets/user.svg" className="image" />
              <p>Profil</p>
            </div>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
