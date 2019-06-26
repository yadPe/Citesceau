import React from 'react';

import  { FirebaseContext } from '../../Firebase';

const getData = (firebase) => {
    firebase.users().then(console.log)
}

const TrestFirebase = () => (
  <FirebaseContext.Consumer>
    {firebase => getData(firebase)}
  </FirebaseContext.Consumer>
);

export default TrestFirebase;

//https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
//https://sebhastian.com/react-firestore