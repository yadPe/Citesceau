import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
            <img src="./assets/edit.svg" style={{ maxWidth: '20px' }} />
Poster
          </NavbarBrand>
          <NavbarBrand href="/VueEnsemble">
            <img src="./assets/search.svg" style={{ maxWidth: '20px' }} />
Voter
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
