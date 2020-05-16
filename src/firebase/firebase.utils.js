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

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapRef = await userRef.get();

    if(!snapRef.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log('asdfsdfsdfsdfsdfsd', collectionRef)

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    console.log(transformedCollection)
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase