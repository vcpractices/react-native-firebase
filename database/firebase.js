import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDGAAjja5fn7tSSKZ7yPropAmgZQksRxMI",
    authDomain: "react-native-firebase-93aa9.firebaseapp.com",
    projectId: "react-native-firebase-93aa9",
    storageBucket: "react-native-firebase-93aa9.appspot.com",
    messagingSenderId: "108784759917",
    appId: "1:108784759917:web:74de4d37e79f7e07967b64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default {
      firebase,
      db,  
  }