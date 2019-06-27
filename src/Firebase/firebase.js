import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBle4csTAAOWsDXr8jHSX8YyRZBI3yJU98',
  authDomain: 'hackatown-645d6.firebaseapp.com',
  databaseURL: 'https://hackatown-645d6.firebaseio.com',
  projectId: 'hackatown-645d6',
  storageBucket: 'hackatown-645d6.appspot.com',
  messagingSenderId: '723473958065',
  appId: '1:723473958065:web:0835ff1fc4b7e666',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
    this.auth = app.auth();
    this.storage = app.storage();
  }

  /**
   * Queries a user from database with its userId
   * @param {string} uid User id to query.
   */
  user = (id) => this.db.collection('Users')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  /**
  * Create a new user in database
  * @param {object} userObject Object containing all user properties
  */
  newUser = (user) => this.db.doc(`Users/${user.uid}`).set({ ...user, points: 100 }, { merge: true });

  /**
  * Queries a project from database with its id
  * @param {string} id Project id to query.
  * @return {object} Project object from database.
  */
  projet = (id) => this.db.collection('Projets')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  /** 
  * Return a list of all Projects in database
  * @return {Array} Array of Project Objects ordered by timestamp - latest first
  */
  projets = () => this.db.collection('Projets')
    .orderBy('creationDate', 'desc')
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));

  /**
  * Create a new project in database and return its id
  * @param {object} projectObject A project object.
  * @return {number} ID generated from database.
  */
  newProjet = (projet) => this.db.collection(`Projets`).add({ ...projet, creationDate: new Date(), points: 0 });

  /**
  * Queries all comments related to a project by id
  * @param {string} projectId A project ID.
  * @return {Array} Array of comment objects ordered by timestamp - latest first
  */
  commentaires = ProjetId => this.db.collection('Commentaires')
    .where('projetId', '==', ProjetId)
    .orderBy('creationDate', 'desc')
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))

  /**
  * Create a new comment in database and return its id
  * @param {object} commentObject A comment object.
  * @return {number} ID generated from database.
  */
  newCommentaire = commentaire => this.db.collection('Commentaires').add({ ...commentaire, creationDate: new Date() });
}


export default Firebase;
