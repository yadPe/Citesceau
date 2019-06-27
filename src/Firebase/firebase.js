import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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
    this.auth = app.auth();
    this.storage = app.storage();
  }

  user = (id) => this.db.collection('Users')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  newUser = (user) => this.db.doc(`Users/${user.uid}`).set({ ...user, points: 100 }, { merge: true });

  projet = (id) => this.db.collection('Projets')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  projets = () => this.db.collection('Projets')
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));

  newProjet = (projet) => this.db.collection(`Projets`).add({ ...projet, creationDate: new Date(), points: 0 });


}

export default Firebase;
