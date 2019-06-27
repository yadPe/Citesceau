import React, { Component } from 'react';
import CommentairesPost from './CommentairesPost';
import withFirebaseContext from '../../Firebase/withFirebaseContext';



class CommentairesGet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            videos: [],
        }
    }


    render() {
        const { videos } = this.state;
        console.log(videos)
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

export default withFirebaseContext(CommentairesGet);