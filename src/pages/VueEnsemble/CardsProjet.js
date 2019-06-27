import React from 'react';


const CardsProjet = (props) => {
  const { author } = props;
  const { creationDate } = props;
  const { description } = props;
  const { image } = props;
  const { points } = props;
  const { titre } = props;
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
          <div style={{ color: 'grey', fontSize: '14px' }}>
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
                width: '100%',
                height: '100%',
              }}
            />

          </div>
          <h2 style={{
            fontSize: '15px',
            maxWidth: '220px',
            minWidth: '220px',
            maxHeight: '85px',
            overflow: 'hidden',
            padding: '4%',
          }}
          >
            {titre}
          </h2>
        </div>
        <div style={{
          fontSize: '13px',
          lineHeight: '16px',
          paddingTop: '2%',
          marginBottom: '4px',
          marginLeft: '1px',
          overflow: 'hidden',
          maxHeight: '5.5em',
        }}
        >
          {description}
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Noto Sans',
            paddingTop: '2px',
          }}
          >
            {author}
          </div>
        </div>
        <button type="button" className="btn btn-info" style={{ width: '100%', marginTop: '2%' }}>Voir le projet</button>
      </div>
    </div>
  );
};
export default CardsProjet;
