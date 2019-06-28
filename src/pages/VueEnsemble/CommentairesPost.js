import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import withFirebaseContext from '../../Firebase/withFirebaseContext';
import { getUrlParams } from '../../Helpers'
import './VueEnsemble.css';


class CommentairesPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            comment: '',
            like: 0,
            projetId: '',


        }
    }

    openModal() {
        this.setState({
            visible: true
        });
        this.comments()
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, })

    }

    comments = () => {
        // Récupération du Firestore grâce à context
        const id = getUrlParams('id')
        const { newCommentaire } = this.props;
        const {
            comment, like,
        } = this.state;
        // Envoi d'infos dans le cloud Firestore
        newCommentaire({
            author: localStorage.getItem('userId'),
            comment,
            like,
            projetId: id,
        });

    }

    render() {
        return (
            <Form id='test'>
                {/*
                <FormGroup>
                    <Label className='Prenom' for="exampleEmail">Prénom</Label>
                    <Input type="text" onChange={this.handleChange} value={this.state.Prénom} name="Prénom" id="text" placeholder="Votre Prénom" />
                </FormGroup>*/}
                <FormGroup>
                    <Label className='Coms' for="exampleText">Commentaire</Label>
                    <Input type="textarea" onChange={this.handleChange} value={this.state.comment} name="comment" id="exampleText" placeholder="Votre Commentaire" />
                </FormGroup>
                <div classNalme='buttoncom'>
                    <Button className='PostButton' type="button" value="Open" onClick={() => this.openModal()}>Poster</Button>
                </div>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="200"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Merci</h1>
                        <p className='ModalCenter'>Votre commentaire a été posté avec succès!</p>
                        <a className='ModalCenter' href="javascript:void(0);" onClick={() => this.closeModal()}>Fermer</a>
                    </div>
                </Modal>
            </Form>
        );
    }
}

export default withFirebaseContext(CommentairesPost);