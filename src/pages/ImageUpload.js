import React, { Component } from 'react';
import withFirebaseContext from '../Firebase/withFirebaseContext';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }

  handleUpload = () => {
    const { image } = this.state;
    const { storage, reportImageUrl, collection } = this.props;


    storage.ref(`Medias/${collection}/${image.name}`).put(image).then(() => {
      storage.ref(`Medias/${collection}/`).child(image.name).getDownloadURL().then((url) => {
        console.log(url);
        this.setState({ url });
        reportImageUrl(url);
      })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="file" onChange={this.handleChange} style={{ fontSize: '20px', marginTop: 10, fontFamily: 'Pragati Narrow' }} />
          <button
            type="button"
            style={{
              marginTop: 10, fontFamily: 'Pragati Narrow', fontSize: '20px', marginLeft: '-18px',
            }}
            onClick={this.handleUpload}
          >
Upload

          </button>
        </div>
        {' '}
        <div style={{
          display: 'flex', width: '100%', justifyContent: 'center',
        }}
        >
          <div style={{
            borderStyle: 'solid', width: '200px', height: '170px', borderWidth: '1.5px', borderColor: '#DFDFE1', marginTop: '5%',
          }}
          >
            <img src={url} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebaseContext(ImageUpload);
