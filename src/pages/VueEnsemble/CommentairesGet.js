import React, { Component } from 'react';
import CommentairesPost from './CommentairesPost';
import withFirebaseContext from '../../Firebase/withFirebaseContext';


class CommentairesGet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
    }


    componentDidMount() {
        const { author, getUsernameByUserId } = this.props;
        if (author) {
            getUsernameByUserId(author).then(username => this.setState({ username }))
        }
    }


    render() {
        const { like, comment, creationDate, projetId } = this.props;
        const { username } = this.state;
        return (
            <div className='ComsBack' style={{ backgroundColor: 'white' }}>
                < h1 className='Prenomback'></h1>
                <p> {comment}</p>
                <p>{username}</p>
            </div>
        );
    }
}

export default withFirebaseContext(CommentairesGet);



