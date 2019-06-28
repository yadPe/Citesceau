import React, { Component } from 'react';
import CommentairesPost from './CommentairesPost';
import withFirebaseContext from '../../Firebase/withFirebaseContext';



class CommentairesGet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            cmm: [],
        }
    }
    componentDidMount() {
        const { commentaires } = this.props;
        commentaires()
            .then(coms => this.setState({ cmm: coms }))
            .catch(console.error)
    }
    render() {
        console.log(author)
        return (
            <div>
                {<div className='bg'></div>}
                <div className='app-container'>
                    <CommentairesPost />

                    {this.state.cmm
                        .map(
                            cmt => (<div className='ComsBack'>
                                < h1 className='Prenomback'> {cmt.author} </h1>
                                <p> {cmt.like}</p>
                            </div>
                            )
                        )
                    }
                </div>
            </div >
        );
    }
}

export default withFirebaseContext(CommentairesGet);