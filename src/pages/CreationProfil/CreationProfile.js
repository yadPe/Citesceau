import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageUpload from '../ImageUpload';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './CreationProfil.css';


class CreationProfile extends Component {
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
    localStorage.setItem('username', username);
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
      <div className='CreationProfil'>
        <Form onSubmit={this.onSubmit} className="classesContainer" autoComplete="off">
          <FormGroup>
            <div className="Prénom">
              <Label for="firstName">Prénom</Label>
            </div>
            <div className="PrénomInput">
              <Input
                id="firstName"
                label="Full Name"
                name="firstName"
                className="textfield"
                value={firstName}
                onChange={this.onChange}
                style={{ marginTop: '5%', width: '70%' }}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="Prénom">
              <Label for="name">Nom</Label>
            </div>
            <div className="PrénomInput">
              <Input
                id="name"
                label="Full Name"
                name="username"
                className="textfield"
                value={username}
                onChange={this.onChange}
                style={{ marginTop: '5%', width: '70%' }}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="DLimage">
              <Label for="File">Télécharger une image</Label>
            </div>
            <div className="DLimage2">
              <ImageUpload reportImageUrl={this.getImageURL} collection="Users" />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="Mail">
              <Label for="Mail">E-Mail</Label>
            </div>
            <div className="MailInput">
              <Input
                id="email"
                label="Email Address"
                name="email"
                className="textfield"
                currentValue={email}
                onChange={this.onChange}
                style={{ marginTop: '5%', width: '70%' }}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="mdp">
              <Label for="Password">Mot de passe</Label>
            </div>
            <div className="mdp2">
              <Input
                id="password"
                label="Password"
                name="passwordOne"
                className="textfield"
                value={passwordOne}
                type="password"
                onChange={this.onChange}
                style={{ marginTop: '5%', width: '70%' }}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="confirmation">
              <Label for="Password">Confirmation</Label>
            </div>
            <div className="confirmation2">
              <Input
                id="password"
                label="Confirm Password"
                name="passwordTwo"
                className="textfield"
                value={passwordTwo}
                type="password"
                onChange={this.onChange}
                style={{ marginTop: '5%', width: '70%' }}
              />
            </div>
          </FormGroup>
          <div className="buttonnn">
            <Button onclick={this.onSubmit} disabled={isInvalid}>Je me connecte</Button>
          </div>
        </Form>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(CreationProfile));
