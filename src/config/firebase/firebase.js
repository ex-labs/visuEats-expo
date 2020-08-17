import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBoRo7374SssRmP-gODLUucbNiKIdcoqIg",
  authDomain: "visueats-9f422.firebaseapp.com",
  databaseURL: "https://visueats-9f422.firebaseio.com",
  projectId: "visueats-9f422",
  storageBucket: "visueats-9f422.appspot.com",
  messagingSenderId: "824201418139",
  appId: "1:824201418139:web:f5bdf25ea714b2c3383d3e",
  measurementId: "G-7RZ1TEWM88",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
