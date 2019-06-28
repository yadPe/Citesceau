import React, { Component } from 'react';
import CommentairesPost from './CommentairesPost';
import withFirebaseContext from '../../Firebase/withFirebaseContext';


class CommentairesGet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            com: [],
        }
    }
    componentDidUpdate() {
        const { user, author } = this.props;
        if (author) {
            user(author)
                .then(console.log)
                //then(data => this.setState({ com: data }))
                .catch(console.error)

        }
    }
    render() {
        const { com } = this.props;
        return (
            <div>
                {<div className='bg'></div>}
                <div className='app-container'>
                    <CommentairesPost />

                    {com ?
                        com.map(
                            cmt => (<div className='ComsBack' style={{ backgroundColor: 'white' }}>
                                < h1 className='Prenomback'></h1>
                                <p> {cmt.comment}</p>
                                <p>{cmt.author}</p>
                            </div>
                            )
                        ) : null
                    }
                </div>
            </div >
        );
    }
}

export default withFirebaseContext(CommentairesGet);