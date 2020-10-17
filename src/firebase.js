import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
  //this is required if firebase authentication is required.
});

//const db =firebaseApp.firestore();
const auth=firebase.auth();

export {auth};