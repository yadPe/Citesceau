import React, { Component } from 'react';
import NavBar from '../NavBar';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

export default Home;