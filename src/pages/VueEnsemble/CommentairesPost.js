import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const comments = [
    {
        author: "tqbIVwTfSWgB4ULkOkaiNEM32v93",
        projetId: 'HqZe0RDTrNOtdiNUIxD5',
        comment: 'Parfait je paye mes impots ',
        creationDate: 1561642145443,
        likes: 1,
    },
    {
        author: "tqbIVwTfSWgB4ULkOkasdada32v93",
        projetId: 'HqZe0RsdsdiNUIxD5',
        comment: 'paye mes impots ',
        creationDate: 1561642141043,
        likes: 1,
    },
    {
        author: "tqbIVwTfSWsdfsdLkOkaiNEM32v93",
        projetId: 'HasdfOtdiNUIxD5',
        comment: 'Parfait je impots ',
        creationDate: 1561642141003,
        likes: 1,
    }
]

class CommentairesPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            projetId: '',
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
        this.sendToDb()
        document.getElementById("test").reset();
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        })

    }

    /*sendToDb = () => {

        firebase.database().ref('Commentaires').push({
            Prénom: this.state.Prénom,
            msg: this.state.message

        });
    }*/
    render() {
        return (
            <Form id='test'>
                <FormGroup>
                    <Label className='Prenom' for="exampleEmail">Prénom</Label>
                    <Input type="text" onChange={this.handleChange} value={this.state.Prénom} name="Prénom" id="text" placeholder="Votre Prénom" />
                </FormGroup>
                <FormGroup>
                    <Label className='Coms' for="exampleText">Commentaire</Label>
                    <Input type="textarea" onChange={this.handleChange} value={this.state.message} name="message" id="exampleText" placeholder="Votre Commentaire" />
                </FormGroup>
                <Button className='PostButton' type="button" value="Open" onClick={() => this.openModal()}>Poster</Button>
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

export default CommentairesPost;