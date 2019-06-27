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
                <h1 className="">Guide du citoyen</h1>
                <p className="Guide">Le budget de la ville est desormais divisé en 3 parties égales : les fonds classiques dédiées au bon fonctionnement, les fonds participatifs qui vous sont dédiés, et les fonds de reserves bonus.</p>
                <h2 className="">Comment ca marche?</h2>
                <p className="Guide"> Chaque mois, 100 points sont attribué à chaque habitants. Libre à lui de les répartir sur les projets qui l'interesse. </p>
                <h3 className="">Es-ce-que je peux proposer des projets?</h3>
                <p className="Guide"> Bien sur, c'est le but. Chaque habitant peut proposer une inititive. Elle sera visible aux yeux de tous, et les gens pourront décider, ou non, de lui attribuer des points en fonction de l'interet.</p>
                <h4 className="">Que se passe-t-il quand un projet est financé?</h4>
                <p className="Guide"> Quand un projet est financé, le maire le met en place sur l'année N+1. Si il n'est pas financé, l'argent est reversé dans le premier tiers (les fonds classiques) </p>
                <h5 className="">Es-ce-que je peux gagner des fonds?</h5>
                <p className="Guide">Oui. 1/3 du budget est dédié au fond bonus, il est possible de gagner des fonds en proposant des projets qui se concretise. Les fonds bonus seront utilisables des le mois suivant sur votre compte.</p>
                <h6 className="">Quid des fonds non-utilisés?</h6>
                <p className="Guide">Les fonds non-utilisés seront reversés au budget classique de la ville.</p>
            </div>
        );
    }
}

export default Guide;
