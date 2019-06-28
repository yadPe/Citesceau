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
   * @param {String} id User id to query.
   * @return {Promise<Object>} User object from database.
   */
  user = id => this.db.collection('Users')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  /**
   * Queries a user last and first names from database with its userId
   * @param {String} userId User id to query.
   * @return {Promise<String>} User last and first names.
   */
  getUsernameByUserId = (userId) => this.db.collection('Users')
    .doc(userId)
    .get()
    .then(querySnapshot => (`${querySnapshot.data().firstName} ${querySnapshot.data().name}`));

  /**
  * Create a new user in database
  * @param {Object} user Object containing all user properties
  */
  newUser = user => this.db.doc(`Users/${user.uid}`).set({ ...user, points: '100' }, { merge: true });

  /**
  * Queries a project from database with its id
  * @param {String} id Project id to query.
  * @return {Promise<Object>} Project object from database.
  */
  projet = id => this.db.collection('Projets')
    .doc(id)
    .get()
    .then(querySnapshot => ({ ...querySnapshot.data(), id: querySnapshot.id }));

  /**
  * Return a list of all Projects in database
  * @return {Promise<Array>} Array of Project Objects ordered by timestamp - latest first
  */
  projets = () => this.db.collection('Projets')
    .orderBy('creationDate', 'desc')
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));

  /**
  * Create a new project in database and return its id
  * @param {Object} projet A project object.
  * @return {Promise<number>} ID generated from database.
  */
  newProjet = projet => this.db.collection('Projets').add({ ...projet, creationDate: new Date(), points: 0 });

  /**
  * Queries all comments related to a project by id
  * @param {String} projectId A project ID.
  * @return {Promise<Array>} Array of comment objects ordered by timestamp - latest first
  */
  commentaires = ProjetId => {
    console.log(ProjetId)
    return this.db.collection('Commentaires')
      .orderBy('creationDate', 'desc')
      .where('projetId', '==', ProjetId)
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
  }

  /**
  * Create a new comment in database and return its id
  * @param {Object} commentaire A comment object.
  * @return {Promise<Number>} ID generated from database.
  */
  newCommentaire = commentaire => this.db.collection('Commentaires').add({ ...commentaire, creationDate: new Date() });

  /**
  * Transfer points between entities.
  * @param {String} from ID of user who send points.
  * @param {String} to ID of user or projet who receives points.
  * @param {String} amount Amount of points to transfer.
  * @return {Promise<Number>} New sender points balance if transation is accepted.
  */
  transaction = (from, to, amount) => (
    new Promise(async (resolve, reject) => {
      let senderBalance = 0;
      await this.user(from)
        .then(user => senderBalance = user.points)
        .catch(reject)
      const senderNewBalance = senderBalance - amount;
      console.log(senderBalance)
      if (senderNewBalance < 0) {
        reject({ code: 1, error: 'Sender does not have enought points' })
        return
      };
      await this.db.collection('Users').doc(from).update({ points: senderNewBalance })
        .catch(reject)
      let receiverBalance, receiverType = null;
      await this.db.collection('Projets').doc(to).get()
        .then(doc => {
          receiverBalance = doc.data().points;
          receiverType = 'Projets';
        })
        .catch(async err => {
          await this.db.collection('Users').doc(to).get()
            .then(doc => {
              receiverBalance = doc.data().points;
              receiverType = 'Users';
            })
            .catch(reject)
        })
      console.log(receiverBalance, receiverType)
      receiverBalance += amount;
      await this.db.collection(receiverType).doc(to).update({ points: receiverBalance })
        .catch(reject)
      console.log(receiverBalance)
      resolve(senderNewBalance)
    })
  )

  getProjectByAuthorId = id => this.db.collection('Projets')
    .where('author', '==', id)
    .get()
    .then(querySnapshot => querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
}
export default Firebase;
