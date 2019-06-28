import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageUpload from '../ImageUpload';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './CreationProfil.css';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      image: '',
      error: null,
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getImageURL = (url) => {
    this.setState({ image: url });
  }

  onSubmit = (event) => {
    const { email, passwordOne } = this.state;
    const { auth } = this.props;
    auth.createUserWithEmailAndPassword(email, passwordOne)
      .then((result) => {
        // eslint-disable-next-line prefer-destructuring
        const user = result.user;
        localStorage.setItem('userId', user.uid);
        this.users(user);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  users = (user) => {
    // Récupération du Firestore grâce à context
    const { newUser } = this.props;
    const {
      username, email, firstName, image,
    } = this.state;
    // Envoi d'infos dans le cloud Firestore
    newUser({
      name: username,
      firstName,
      email,
      uid: user.uid,
      image,
    });
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const {
      firstName,
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      image,
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === ''
      || image === '';
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'Pragati Narrow',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
      >
        <Form onSubmit={this.onSubmit} className="classesContainer" autoComplete="off">
          <FormGroup>
            <Label for="firstName">Prénom</Label>
            <Input
              id="firstName"
              label="Full Name"
              name="firstName"
              className="textfield"
              value={firstName}
              onChange={this.onChange}
              style={{ marginTop: '0%', width: '70%', marginLeft: '3.8em' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Nom</Label>
            <Input
              id="name"
              label="Full Name"
              name="username"
              className="textfield"
              value={username}
              onChange={this.onChange}
              style={{ marginTop: '0%', width: '70%', marginLeft: '3.8em' }}
            />
          </FormGroup>
          <FormGroup style={{ marginLeft: '0px' }}>
            <Label for="File">Télécharger une image</Label>
            <ImageUpload reportImageUrl={this.getImageURL} collection="Users" />
          </FormGroup>
          <FormGroup>
            <Label for="Mail">E-Mail</Label>
            <Input
              id="email"
              label="Email Address"
              name="email"
              className="textfield"
              currentValue={email}
              onChange={this.onChange}
              style={{ marginTop: '0%', width: '70%', marginLeft: '3.8em' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Mot de passe</Label>
            <Input
              id="password"
              label="Password"
              name="passwordOne"
              className="textfield"
              value={passwordOne}
              type="password"
              onChange={this.onChange}
              style={{ marginTop: '0%', width: '70%', marginLeft: '3.8em' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Confirmation</Label>
            <Input
              id="password"
              label="Confirm Password"
              name="passwordTwo"
              className="textfield"
              value={passwordTwo}
              type="password"
              onChange={this.onChange}
              style={{ marginTop: '0%', width: '70%', marginLeft: '3.8em' }}
            />
          </FormGroup>
          <Button style={{ fontSize: '24px', backgroundColor: '#17a2b8', borderColor: '#17a2b8' }} onclick={this.onSubmit} disabled={isInvalid}>Je me connecte</Button>
        </Form>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(Signup));
