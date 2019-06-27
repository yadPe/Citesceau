import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageUpload from '../ImageUpload';
import { withRouter } from 'react-router';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './NewProjet.css';

class NewProjet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      description: '',
      image: '',
    };
  }

  getImageURL = (url) => {
    this.setState({ image: url })
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { newProjet, history } = this.props;
    const {
      titre, description, image
    } = this.state;

    newProjet({
      titre,
      description,
      image,
      author: localStorage.getItem('userId')
    }).then(ref => history.push(`/Projet?id=${ref.id}`)).catch(err => this.setState({error: 'Oops ! Ca marche pas'}))

    event.preventDefault();
  }

  render() {
    const { titre, description, image, error } = this.state;
    const isInvalid = titre === ''
      || description === ''
      || image === '';
    return (
      <div className="Formulaire">
        <div>{error}</div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="name">Titre du projet</Label>
            <Input
              type="name"
              name="titre"
              label="name"
              id="name"
              onChange={this.onChange}
              value={titre}
            />
          </FormGroup>
          <FormGroup>
            <Label for="File">Télécharger une image</Label>
            <ImageUpload reportImageUrl={this.getImageURL} collection={'Projets'} />
          </FormGroup>
          <FormGroup>
            <Label for="text">Description du projet</Label>
            <Input
              type="textarea"
              name="description"
              label="text"
              id="text"
              onChange={this.onChange}
              value={description}
            />
          </FormGroup>
          <Button onclick={this.onSubmit} disabled={isInvalid}>Valider mon projet</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(NewProjet));
