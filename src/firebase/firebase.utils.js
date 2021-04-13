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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt= new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;