/* eslint-disable react/no-unused-state */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import React, { Component } from 'react';

export const FirebaseContext = React.createContext();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class FirebaseProvider extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.state = {
      auth: this.auth,
      firestore: this.firestore,
      googleProvider: this.googleProvider,
      facebookProvider: this.facebookProvider,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <FirebaseContext.Provider value={this.state}>
        {children}
      </FirebaseContext.Provider>
    );
  }
}


export default FirebaseProvider;
