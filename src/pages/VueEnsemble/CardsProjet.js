import React from 'react';
import { withRouter } from 'react-router';


const CardsProjet = (props) => {
  const {
    creationDate,
    description,
    image,
    points,
    titre,
    projectId,
    history,
  } = props;

  return (
    <div className="cardscenter" style={{ paddingTop: '5%' }}>
      <div
        className="divCards"
        style={{
          background: 'white',
          width: '100%',
          padding: '3%',
        }}
      >
        <div style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
        }}
        >
          <div style={{
            borderStyle: 'solid',
            borderColor: '#DFDFE1',
            borderRadius: '5px',
            borderWidth: '1.4px',
            width: '120px',
            height: '30px',
            marginBottom: '2%',
            textAlign: 'center',
            color: 'red',
            fontFamily: 'Righteous',
            opacity: 0.7,
            paddingTop: '0.4%',
          }}
          >
            {points}
          </div>
          <div style={{ color: 'grey', fontSize: '14px', fontFamily: 'Pragati Narrow' }}>
            {creationDate}
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{
            maxWidth: '140px',
            height: '90px',
          }}
          >
            <img
              src={image}
              alt="lol"
              style={{
                width: '84%',
                height: '100%',
              }}
            />

          </div>
          <h2 style={{
            fontSize: '17px',
            maxWidth: '220px',
            minWidth: '220px',
            maxHeight: '85px',
            overflow: 'hidden',
            padding: '-26%',
            fontFamily: 'Russo One',
          }}
          >
            {titre}
          </h2>
        </div>
        <div style={{
          fontSize: '19px',
          lineHeight: '16px',
          paddingTop: '3%',
          marginBottom: '4px',
          marginLeft: '1px',
          overflow: 'hidden',
          maxHeight: '4.5em',
          fontFamily: 'Pragati Narrow',
          opacity: '0.9',
        }}
        >
          {description}
        </div>
        <button
          type="button"
          className="btn btn-info"
          style={{
            fontFamily: 'Pragati Narrow', fontSize: '20px', width: '100%', marginTop: '2%',
          }}
          onClick={() => history.push(`/Projet?id=${projectId}`)}
        >
Voir le projet

        </button>
      </div>
    </div>
  );
};
export default withRouter(CardsProjet);
