import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageUpload from '../ImageUpload';
import withFirebaseContext from '../Firebase/withFirebaseContext';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
      // Math.floor(Math.random()*99999)+'toto'
      // Math.floor(Math.random()*99999)+'toto@mail.fr'
    };
  }


  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
    const { firestore } = this.props;
    const { username, email, firstName } = this.state;
    // Envoi d'infos dans le cloud Firestore
    firestore.doc(`Users/${user.uid}`).set({
      name: username,
      firstName,
      email,
      uid: user.uid,
    }, { merge: true });
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
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === '';
    return (
      <div>
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
              style={{ marginTop: '5%', width: '50%' }}
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
              style={{ marginTop: '5%', width: '50%' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="File">Télécharger une image</Label>
            <ImageUpload getImage={this.getImage} />
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
              style={{ marginTop: '5%', width: '50%' }}
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
              style={{ marginTop: '5%', width: '50%' }}
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
              style={{ marginTop: '5%', width: '50%' }}
            />
          </FormGroup>
          <Button onclick={this.onSubmit} disabled={isInvalid}>Je me connecte</Button>
        </Form>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(Signup));
