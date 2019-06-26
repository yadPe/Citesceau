import React, { Component } from 'react';
import NavBar from '../NavBar';

class NewProjet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>
                    salut
                </h1>
                <NavBar />
            </div>
        );
    }
}

export default NewProjet;