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
                <h1 className="TitreGuide">Guide du citoyen</h1>
                <p className="Guide">Le budget de la ville est desormais divisé en 3 parties égales : les fonds classiques dédiées au bon fonctionnement, les bitcold qui vous sont dédiés, et les bitcold bonus.</p>
                <h2 className="TitreGuide">Comment ca marche?</h2>
                <p className="Guide"> Chaque mois, 100 bitcold sont attribué à chaque habitants. Libre à lui de les répartir sur les projets qui l'interesse. </p>
                <h3 className="TitreGuide">Es-ce-que je peux proposer des projets?</h3>
                <p className="Guide"> Bien sur, c'est le but. Chaque habitant peut proposer une inititive. Elle sera visible aux yeux de tous, et les gens pourront décider, ou non, de lui attribuer des points en fonction de l'interet.</p>
                <h4 className="TitreGuide">Que se passe-t-il quand un projet est financé?</h4>
                <p className="Guide"> Quand un projet est financé, le maire le met en place sur l'année N+1. Si il n'est pas financé, l'argent est reversé dans le premier tiers (les fonds classiques) </p>
                <h5 className="TitreGuide">Es-ce-que je peux gagner des fonds?</h5>
                <p className="Guide">Oui. 1/3 du budget est dédié au fond bonus, il est possible de gagner des fonds en proposant des projets qui se concretise. Les fonds bonus seront utilisables des le mois suivant sur votre compte.</p>
                <h6 className="TitreGuide">Quid des fonds non-utilisés?</h6>
                <p className="Guide">Les fonds non-utilisés seront reversés au budget classique de la ville.</p>
                <h7 className="TitreGuide">Comment sont calculés mes bitcold?</h7>
                <p className="Guide">Les bitcold sont calculés en fonction du budget et du nombre d'habitants. Prenons une exemple, si 1000€ sont aloués aux bitcold et que notre ville est peuplée de 100 habitants, nous avons 10€ par habitants. 1 bitcold = 1euro. Donc chaque habitants peut disposer de ses 10 bitcold comme il le désire.  </p>
            </div>
        );
    }
}

export default Guide;
