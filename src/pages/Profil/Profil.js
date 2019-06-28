/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import {
  Badge, Card, CardImg, CardBody, CardTitle, Button,
} from 'reactstrap';
import { withRouter } from 'react-router';
import Header from '../Header';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projets: [],
    };
  }

  async componentWillMount() {
    const { user, getProjectByAuthorId } = this.props;
    let { profile } = this.state;
    const userId = localStorage.getItem('userId');
    await user(userId).then((data) => {
      profile = data;
    });

    await getProjectByAuthorId(userId).then((projets) => {
      this.setState({
        projets, profile,
      });
    });
  }

  render() {
    const {
      profile, projets,
    } = this.state;
    const { history } = this.props;
    const {
      firstName, name, image, points,
    } = profile;

    return (
      <div>
        <Header />
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src={image} alt="profil" />
        <h2 className="firstName">
          {firstName}
          {' '}
          {name}
        </h2>
        <Badge className="NombresPoints2">
          {points}
          {' '}
          bitcolds
        </Badge>
        <hr />
        <h3 className="Votes">Votes</h3>
        <h3 className="Propositions">Mes propositions de projets</h3>
        {projets.map(projet => (
          <Card style={{
            marginLeft: '25%',
            marginRight: '25%',
            marginTop: '10%',
            marginBottom: '30%',
            maxHeight: '20%',
            maxWidth: '50%',
          }}
          >
            <CardImg
              style={{ maxHeight: '20%' }}
              width="100%"
              src={projet.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{projet.titre}</CardTitle>
              <Button className="plus" onClick={() => history.push(`/projet?id=${projet.id}`)}>+ d'infos</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default withRouter(withFirebaseContext(Profil));
