import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBTW8lhZ8q1rfIXrXZKTBe6sPP8veXhcI8",
  authDomain: "plantathon-7afb0.firebaseapp.com",
  databaseURL: "https://plantathon-7afb0.firebaseio.com",
  projectId: "plantathon-7afb0",
  storageBucket: "plantathon-7afb0.appspot.com",
  messagingSenderId: "821593642069",
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
