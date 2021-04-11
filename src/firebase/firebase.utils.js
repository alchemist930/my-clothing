import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAvkEFBRnaSc6KbRkcN2krswrLDoaTfyM4",
    authDomain: "clothing-db-3132f.firebaseapp.com",
    projectId: "clothing-db-3132f",
    storageBucket: "clothing-db-3132f.appspot.com",
    messagingSenderId: "980201786876",
    appId: "1:980201786876:web:64eda6cfd88f051536f679",
    measurementId: "G-Y18WL62KKP"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;