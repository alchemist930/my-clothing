import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('1wk854WkZsHsjpYYGzRp').collection('cartItems').doc('VFcxK3QdNRLmQNwlFBtZ');
// firestore.doc('/users/1wk854WkZsHsjpYYGzRp/cartItems/VFcxK3QdNRLmQNwlFBtZ');
// firestore.collection('/users/1wk854WkZsHsjpYYGzRp/cartItems');