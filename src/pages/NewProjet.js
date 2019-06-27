import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageUpload from '../ImageUpload';
import './form.css';

class NewProjet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nom: '',
      Description: '',
    };
  }

  getImage = (url) => {
    const { firestore } = this.props;
    firestore.doc(`Users/${localStorage.getItem('userId')}`).set({
      url,
    }, { merge: true });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { firestore } = this.props;
    const {
      Nom, Description,
    } = this.state;

    if (Nom) {
      firestore.doc(`Users/${localStorage.getItem('userId')}`).set({
        Nom,
      }, { merge: true });
    }
    if (Description) {
      firestore.doc(`Users/${localStorage.getItem('userId')}`).set({
        Description,
      }, { merge: true });
    }

    console.log(localStorage.getItem('userId'));

    event.preventDefault();
  }

  render() {
    const { Nom, Description } = this.state;
    return (
      <div className="Formulaire">
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="name">Nom du projet</Label>
            <Input
              type="name"
              name="nom"
              label="name"
              id="name"
              onChange={this.onChange}
              value={Nom}
            />
          </FormGroup>
          <FormGroup>
            <Label for="File">Télécharger une image</Label>
            <ImageUpload getImage={this.getImage} />
          </FormGroup>
          <FormGroup>
            <Label for="text">Description du projet</Label>
            <Input
              type="textarea"
              name="text"
              label="text"
              id="text"
              onChange={this.onChange}
              value={Description}
            />
          </FormGroup>
          <Button onclick={this.onSubmit}>Valider mon projet</Button>
        </Form>
      </div>
    );
  }
}

export default NewProjet;
