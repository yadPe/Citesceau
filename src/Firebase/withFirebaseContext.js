import React from 'react';
import { FirebaseContext } from './FirebaseProvider';

const withFirebaseContext = OutComponent => props => (
  <FirebaseContext.Consumer>
    {value => <OutComponent {...props} {...value} />}
  </FirebaseContext.Consumer>
);

export default withFirebaseContext;
