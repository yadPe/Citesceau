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
        <Navbar className="navbar navbar2 fixed-bottom navbar-light bg-light" color="light" light expand="md" navbar-fixed-bottom>
          <NavbarBrand>
            <Link to="/">
              <div className="navbrand">
                <img src="./assets/home.svg" className="image" />
                <p>Home</p>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarBrand>
            <Link to="/NewProjet">
              <div className="navbrand">
                <img src="./assets/edit.svg" className="image" />
                <p>Poster</p>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarBrand>
            <Link to="/VueEnsemble">
              <div className="navbrand">
                <img src="./assets/search.svg" className="image" />
                <p>Voter</p>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarBrand>
            <Link to="/Profil">
              <div className="navbrand">
                <img src="./assets/user.svg" className="image" />
                <p>Profil</p>
              </div>
            </Link>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
