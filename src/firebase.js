import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYX8wREpU6VYceIJyfPE_Ss95oa8vF44Y",
  authDomain: "emmaroeproject5.firebaseapp.com",
  databaseURL: "https://emmaroeproject5.firebaseio.com",
  projectId: "emmaroeproject5",
  storageBucket: "emmaroeproject5.appspot.com",
  messagingSenderId: "256742494491"
};
firebase.initializeApp(config);

export default firebase;