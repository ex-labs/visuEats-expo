import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCcDHx6-zmkQia5xwOadJvXY-jEc8eq1Hk",
  authDomain: "practg.firebaseapp.com",
  databaseURL: "https://practg.firebaseio.com",
  projectId: "practg",
  storageBucket: "practg.appspot.com",
  messagingSenderId: "859074145502",
  appId: "1:859074145502:web:761d4110a1a2050109e64f",
  measurementId: "G-6NH9JR95WE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
