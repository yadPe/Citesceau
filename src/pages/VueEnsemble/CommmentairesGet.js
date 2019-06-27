import React, { Component } from 'react';
import CommentairesPost from './CommentairesPost';
//import * as firebase from 'firebase';
//import Config from './Config';


class CommentairesGet extends Component {

    constructor() {
        super()
        //firebase.initializeApp(Config)
        this.state = {
            loading: true
        }
    }

    /*componentWillMount() {
        const ref = firebase.database().ref('Commentaires')
        ref.on('value', snapshot => {
            console.log(snapshot.val())
            this.setState({
                Commentaires: snapshot.val(),
                loading: false,
                lastkey: snapshot.key
            })
        })
        console.log(this.state.lastkey)
    }
    */

    render() {

        return (
            <div>
                {<div className='bg'></div>}
                <div className='app-container'>
                    <CommentairesPost />

                    {this.state.Commentaires
                        ? Object.values(this.state.Commentaires).map(
                            (perso, i) => (<div className='ComsBack'>
                                < h1 className='Prenomback' key={i} > {perso.Prénom} </h1>
                                <p> {perso.msg}</p>
                            </div>
                            )
                        )
                        : ''}
                </div>
            </div >
        );
    }
}

export default CommentairesGet;