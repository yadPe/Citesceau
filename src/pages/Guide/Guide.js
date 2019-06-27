import React, { Component } from 'react';
import './Guide.css';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <h1 className="Profil">Profil</h1>
                <h2 className="NombrePoints">Nombre de points</h2>
                <h3 className="NombresPoints2"></h3>
                <h3 className="Votes">Votes</h3>
                <h4 className="Propositions">Proposition</h4>
            </div>
        );
    }
}

export default Guide;
