import firebase from 'firebase';
import firebase_config from './firebase_config'

const firebaseApp = firebase.initializeApp(firebase_config);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {
    db,
    auth,
}