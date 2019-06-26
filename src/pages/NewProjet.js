import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewProjet extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="formulaire">
        <Form>
          <FormGroup>
            <Label for="name">Nom du projet</Label>
            <Input type="name" name="nom" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Télécharger une image</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted" />
          </FormGroup>
          <FormGroup>
            <Label for="Text">Description du projet</Label>
            <Input type="textarea" name="text" id="Text" />
          </FormGroup>
          <Button>Valider mon projet</Button>
        </Form>
      </div>
    );
  }
}

export default NewProjet;
