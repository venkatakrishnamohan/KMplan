import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrLWk-HW35crvuA_xy8qnu-gXt4pMQrqQ",
    authDomain: "kmplan-765d9.firebaseapp.com",
    databaseURL: "https://kmplan-765d9.firebaseio.com",
    projectId: "kmplan-765d9",
    storageBucket: "kmplan-765d9.appspot.com",
    messagingSenderId: "219212373725"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;