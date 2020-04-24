import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKDxWU0WScXSa_L0Hzw08KCcNNFP3Qfkw",
    authDomain: "crwn-db-4ba1a.firebaseapp.com",
    databaseURL: "https://crwn-db-4ba1a.firebaseio.com",
    projectId: "crwn-db-4ba1a",
    storageBucket: "crwn-db-4ba1a.appspot.com",
    messagingSenderId: "132091944944",
    appId: "1:132091944944:web:094d1ae5d45d332aa54735"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase