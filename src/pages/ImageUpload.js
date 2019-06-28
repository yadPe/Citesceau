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
        <input type="file" onChange={this.handleChange} />
        <button type="button" onClick={this.handleUpload}>Upload</button>
        {' '}
        <img src={url} alt="uploaded img" style={{ maxHeight: '150px', maxWidth: '150px' }} />
      </div>
    );
  }
}

export default withFirebaseContext(ImageUpload);
