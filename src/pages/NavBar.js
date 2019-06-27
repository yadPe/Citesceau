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
        <Navbar className="navbar fixed-bottom navbar-light bg-light" color="light" light expand="md" navbar-fixed-bottom>
          <NavbarBrand href="/">
            <img src="./assets/home.svg" className="image" />
Home
          </NavbarBrand>
          <NavbarBrand href="/NewProjet">
            <img src="./assets/edit.svg" className="image" />
Poster
          </NavbarBrand>
          <NavbarBrand href="/VueEnsemble">
            <img src="./assets/search.svg" className="image" />
Voter
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
