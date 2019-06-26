import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBle4csTAAOWsDXr8jHSX8YyRZBI3yJU98",
  authDomain: "hackatown-645d6.firebaseapp.com",
  databaseURL: "https://hackatown-645d6.firebaseio.com",
  projectId: "hackatown-645d6",
  storageBucket: "hackatown-645d6.appspot.com",
  messagingSenderId: "723473958065",
  appId: "1:723473958065:web:0835ff1fc4b7e666"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
  }

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.collection('Users')
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()));
}

export default Firebase;


